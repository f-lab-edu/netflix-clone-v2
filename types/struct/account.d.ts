declare interface AccountBaseInfo {
  id: number
  password: string
  email: string
  emailVerified: boolean
  phone: string
  phoneVerified: boolean
  policy: boolean
  specialOffer: boolean
  billingPolicies: PaymentMethodPolicies
}
declare interface AccountTotalInfo {
  billing: {
    /**
     * 구독 멤버십 정보
     */
    currentPlan: MembershipPlans
    /**
     * 다음 결제일
     */
    nextBillingDate: string
    /**
     * 등록된 결제 수단
     */
    paymentMethod: PaymentMethod[]
    /**
     * 현재 사용중인 주 결제 수단
     */
    currentPaymentMathod: PaymentMethod
  }
  profiles: {
    /**
     * 로그인 후 메인에서 선택한 프로필
     */
    currentProfile: Profile
    /**
     * 프로필 목록
     */
    profiles: Profile[]
  }
  /**
   * 보안 정보
   */
  security: {
    /**
     * 액세스 정보
     */
    accessInfo: {
      devices: DeviceInfo[]
    }
  }
}

declare interface DeviceInfo {
  id: number
  deviceName: string
  deviceType: string
  deviceOS: string
  accessToken: string
  lastUsedProfileId: number
  lastAccess: number
}

declare interface BillingHistory {
  id: number
  date: string
  description: string
  amount: number
  paymentMethod: PaymentMethod
}

/**
 * 결제 수단 타입
 */
declare type PaymentMethodType = 'phone' | 'card' | 'simplePay'

/**
 * 결제 수단
 */
type PaymentMethod = {
  id: number
  accountId: number
  /**
   * 결제 수단 타입
   */
  type: PaymentMethodType
  simplePay?: PaymentMethodSimplePayInfo
  phone?: PaymentMethodPhoneInfo
  card?: PaymentMethodCardInfo
}

interface PaymentMethodSimplePayInfo {
  /**
   * simplePay의 이름
   */
  name: string
  paymentToken: string
}
interface PaymentMethodPhoneInfo {
  /**
   * 전화번호
   */
  phoneNumber: string
  /**
   * 통신사
   */
  carrier: string
  paymentToken: string
}

declare interface PaymentMethodCardInfo {
  cardNumber: string
  cardHolderName: string
  expiryDate: string
  dateOfBirth: string
}

declare interface PaymentMethodPolicies {
  privatePolicy: boolean
  transferInformationToThirdPartiesPolicy: boolean
  transferInformationAbroadPolicy: boolean
  paymentGateWayPolicy: boolean
  billingAgree: boolean
}

declare type AgeRestriction = 0 | 7 | 12 | 15 | 19

declare type MembershipPlanTier = 'adsStandard' | 'standard' | 'premium'

declare interface MembershipPlans {
  id: number
  /**
   * 플랜 명
   */
  plan: string
  /**
   * 설명
   */
  description: string
  /**
   * 가격
   */
  price: number
  /**
   * 동시 시청 가능 디바이스 숫자
   */
  maxWatcherCount: number
  /**
   * 저장 가능 디바이스 숫자
   */
  saveAllowedDeviceNumber: number
  /**
   * 지원하는 음량 퀄리티
   */
  soundQuality?: SoundQuality
  /**
   * 최대 해상도 제한
   */
  maxContentResolution: ResolutionLevel
  /**
   * 광고 여부
   */
  ads: boolean
}