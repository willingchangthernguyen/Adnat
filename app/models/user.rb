# frozen_string_literal: true

# User Model
class User
  include Mongoid::Document
  include ActiveModel::Serializers::JSON
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  ## Database authenticatable
  field :email,              type: String, default: ''
  field :encrypted_password, type: String, default: ''
  field :name, type: String
  field :auth_token, type: String, default: ''

  ## Recoverable
  field :reset_password_token,   type: String
  field :reset_password_sent_at, type: Time

  ## Rememberable
  field :remember_created_at, type: Time

  ## Trackable
  # field :sign_in_count,      type: Integer, default: 0
  # field :current_sign_in_at, type: Time
  # field :last_sign_in_at,    type: Time
  # field :current_sign_in_ip, type: String
  # field :last_sign_in_ip,    type: String

  ## Confirmable
  # field :confirmation_token,   type: String
  # field :confirmed_at,         type: Time
  # field :confirmation_sent_at, type: Time
  # field :unconfirmed_email,    type: String # Only if using reconfirmable

  ## Lockable
  # field :failed_attempts, type: Integer, default: 0 # Only if lock strategy is :failed_attempts
  # field :unlock_token,    type: String # Only if unlock strategy is :email or :both
  # field :locked_at,       type: Time

  ## Validates
  validates :auth_token, uniqueness: true
  validates :password, length: { minimum: 6 },
                       format: { with: /(?=.*[0-9])(?=.*[a-z]).{6,}/ },
                       on: :create
  validates :name, presence: true

  ## Association
  belongs_to :organisation, optional: true
  has_many :shifts, dependent: :destroy

  ## Index
  index({ auth_token: 1 }, unique: true)

  before_create :generate_authentication_token!

  def generate_authentication_token!
    loop do
      self.auth_token = Devise.friendly_token
      break unless User.find_by(auth_token: auth_token)
    end
  end

  def self.home(organisation, params)
    if organisation.present?
      search_shifts(organisation, params)
    else
      search_organisations(params)
    end
  end

  def self.search_shifts(organisation, params)
    shifts = Shift.where(organisation_id: organisation.id)
                  .order_by(id: :desc).page(params[:page]).per(params[:per_page])
    { organisation: organisation,
      shifts: shifts.as_json(only: %I[_id start_time end_time break_length],
                             include: { user: { only: :name } }) }
  end

  def self.search_organisations(params)
    organisations = Organisation.order_by(id: :desc).page(params[:page]).per(params[:per_page])
    organisations.to_json(only: %I[_id name hourly_rate])
    { organisations: organisations }
  end
end
