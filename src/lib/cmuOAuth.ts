export interface CMUUserInfo {
  cmuitaccount_name: string;
  cmuitaccount: string;
  prename_id?: string;
  prename_TH?: string;
  prename_EN?: string;
  firstname_TH: string;
  firstname_EN: string;
  lastname_TH: string;
  lastname_EN: string;
  student_id?: string;
  organization_code?: string;
  organization_name_TH?: string;
  organization_name_EN?: string;
  itaccounttype_id?: string;
  itaccounttype_TH?: string;
  itaccounttype_EN?: string;
}

export interface CMUAuthConfig {
  clientId: string;
  redirectUri: string;
  authUrl: string;
  scope: string;
}

export const DEFAULT_CMU_CLIENT_ID = 'MWM9PxVFyADkwn6pTSxbKlVbw4Fq7me2xzOGLqW4';

export const CPE_REGISTERED_REDIRECT_URIS = [
  { group: 'localhost', label: 'Localhost (6013) - /api/auth/callback (แนะนำสำหรับ Docker)', url: 'http://localhost:6013/api/auth/callback' },
  { group: 'localhost', label: 'Localhost (5173) - /api/auth/callback (แนะนำสำหรับ Dev)', url: 'http://localhost:5173/api/auth/callback' },
  { group: 'localhost', label: 'Localhost (3000) - /callback', url: 'http://localhost:3000/callback' },
  { group: 'localhost', label: 'Localhost (5173) - /callback', url: 'http://localhost:5173/callback' },
  { group: 'localhost', label: 'Localhost (3000) - /auth/callback', url: 'http://localhost:3000/auth/callback' },
  { group: 'localhost', label: 'Localhost (5173) - /auth/callback', url: 'http://localhost:5173/auth/callback' },
  { group: 'fsg11', label: 'FSG 11 - /auth/callback', url: 'https://fsg11.cpecmu.com/auth/callback' },
  { group: 'fsg12', label: 'FSG 12 - /callback', url: 'https://fsg12.cpecmu.com/callback' },
  { group: 'fsg12', label: 'FSG 12 - /auth/callback', url: 'https://fsg12.cpecmu.com/auth/callback' },
  { group: 'fsg12', label: 'FSG 12 - /api/auth/callback', url: 'https://fsg12.cpecmu.com/api/auth/callback' },
  { group: 'fsg13', label: 'FSG 13 - /callback', url: 'https://fsg13.cpecmu.com/callback' },
  { group: 'fsg13', label: 'FSG 13 - /auth/callback', url: 'https://fsg13.cpecmu.com/auth/callback' },
  { group: 'fsg13', label: 'FSG 13 - /api/auth/callback', url: 'https://fsg13.cpecmu.com/api/auth/callback' },
  { group: 'fsg14', label: 'FSG 14 - /callback', url: 'https://fsg14.cpecmu.com/callback' },
  { group: 'fsg14', label: 'FSG 14 - /auth/callback', url: 'https://fsg14.cpecmu.com/auth/callback' },
  { group: 'fsg14', label: 'FSG 14 - /api/auth/callback', url: 'https://fsg14.cpecmu.com/api/auth/callback' },
  { group: 'fsg15', label: 'FSG 15 - /callback', url: 'https://fsg15.cpecmu.com/callback' },
  { group: 'fsg15', label: 'FSG 15 - /auth/callback', url: 'https://fsg15.cpecmu.com/auth/callback' },
  { group: 'fsg15', label: 'FSG 15 - /api/auth/callback', url: 'https://fsg15.cpecmu.com/api/auth/callback' },
  { group: 'fsg16', label: 'FSG 16 - /callback', url: 'https://fsg16.cpecmu.com/callback' },
  { group: 'fsg16', label: 'FSG 16 - /auth/callback', url: 'https://fsg16.cpecmu.com/auth/callback' },
  { group: 'fsg16', label: 'FSG 16 - /api/auth/callback', url: 'https://fsg16.cpecmu.com/api/auth/callback' },
  { group: 'fsg17', label: 'FSG 17 - /callback', url: 'https://fsg17.cpecmu.com/callback' },
  { group: 'fsg17', label: 'FSG 17 - /auth/callback', url: 'https://fsg17.cpecmu.com/auth/callback' },
  { group: 'fsg17', label: 'FSG 17 - /api/auth/callback', url: 'https://fsg17.cpecmu.com/api/auth/callback' },
  { group: 'fsg18', label: 'FSG 18 - /callback', url: 'https://fsg18.cpecmu.com/callback' },
  { group: 'fsg18', label: 'FSG 18 - /auth/callback', url: 'https://fsg18.cpecmu.com/auth/callback' },
  { group: 'fsg18', label: 'FSG 18 - /api/auth/callback', url: 'https://fsg18.cpecmu.com/api/auth/callback' },
  { group: 'fsg19', label: 'FSG 19 - /callback', url: 'https://fsg19.cpecmu.com/callback' },
  { group: 'fsg19', label: 'FSG 19 - /auth/callback', url: 'https://fsg19.cpecmu.com/auth/callback' },
  { group: 'fsg19', label: 'FSG 19 - /api/auth/callback', url: 'https://fsg19.cpecmu.com/api/auth/callback' },
  { group: 'fsg20', label: 'FSG 20 - /callback', url: 'https://fsg20.cpecmu.com/callback' },
  { group: 'fsg20', label: 'FSG 20 - /auth/callback', url: 'https://fsg20.cpecmu.com/auth/callback' },
  { group: 'fsg20', label: 'FSG 20 - /api/auth/callback', url: 'https://fsg20.cpecmu.com/api/auth/callback' },
];

const STORAGE_KEY_CONFIG = 'cmu_oauth_config';
const STORAGE_KEY_USER = 'cmu_oauth_user_session';
const STORAGE_KEY_TOKEN = 'cmu_oauth_access_token';
const OAUTH_STATE_COOKIE = 'cmu_oauth_state';

export const CPE_AUTH_AUTHORIZE_URL = 'https://oauth497.cpecmu.com/application/o/authorize/';
export const CPE_AUTH_TOKEN_URL = 'https://oauth497.cpecmu.com/application/o/token/';
export const CPE_AUTH_USERINFO_URL = 'https://oauth497.cpecmu.com/application/o/userinfo/';
export const CPE_AUTH_DEFAULT_SCOPE = 'openid profile email basic_info';

export function getCMUAuthConfig(): CMUAuthConfig {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';

  const env = (import.meta as unknown as { env?: Record<string, string> }).env;
  const defaultRedirect = env?.VITE_CMU_OAUTH_REDIRECT_URI ||
    (currentOrigin ? `${currentOrigin}/api/auth/callback` : 'http://localhost:5173/api/auth/callback');

  const envClientId = env?.VITE_CMU_OAUTH_CLIENT_ID || DEFAULT_CMU_CLIENT_ID;

  try {
    const saved = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (saved) {
      const parsed = JSON.parse(saved);
      const isOldAuthUrl = parsed.authUrl?.includes('oauth.cmu.ac.th');
      return {
        clientId: envClientId,
        redirectUri: defaultRedirect,
        authUrl: isOldAuthUrl ? CPE_AUTH_AUTHORIZE_URL : (parsed.authUrl || CPE_AUTH_AUTHORIZE_URL),
        scope: isOldAuthUrl || !parsed.scope ? CPE_AUTH_DEFAULT_SCOPE : parsed.scope,
      };
    }
  } catch {
    // ignore
  }

  return {
    clientId: envClientId,
    redirectUri: defaultRedirect,
    authUrl: CPE_AUTH_AUTHORIZE_URL,
    scope: CPE_AUTH_DEFAULT_SCOPE,
  };
}

export function saveCMUAuthConfig(config: Partial<CMUAuthConfig>) {
  const current = getCMUAuthConfig();
  const updated = { ...current, ...config };
  delete (updated as CMUAuthConfig & { clientSecret?: string }).clientSecret;
  updated.clientId = current.clientId;
  localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(updated));
  return updated;
}

export function buildCMUAuthorizeUrl(customRedirectUri?: string): string {
  const config = getCMUAuthConfig();
  const redirectUri = customRedirectUri || config.redirectUri;

  const state = crypto.randomUUID();
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${OAUTH_STATE_COOKIE}=${state}; Max-Age=600; Path=/; SameSite=Lax${secure}`;
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: config.clientId || DEFAULT_CMU_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: config.scope || CPE_AUTH_DEFAULT_SCOPE,
    state,
  });

  return `${config.authUrl}?${params.toString()}`;
}

export function consumeCMUOAuthState(): string | null {
  const prefix = `${OAUTH_STATE_COOKIE}=`;
  const value = document.cookie.split('; ').find((cookie) => cookie.startsWith(prefix))?.slice(prefix.length) || null;
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${OAUTH_STATE_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
  return value;
}

export function isCMUStaff(user: CMUUserInfo): boolean {
  if (user.cmuitaccount === 'bimcub12345@cmu.ac.th' || user.cmuitaccount.includes('admin')) {
    return true;
  }
  if (user.itaccounttype_id === 'StaffAcc' || user.itaccounttype_EN?.toLowerCase().includes('staff')) {
    return true;
  }
  if (!user.student_id && user.organization_name_TH?.includes('กองอาคาร')) {
    return true;
  }
  return false;
}

export const MOCK_CMU_ACCOUNTS: CMUUserInfo[] = [
  {
    cmuitaccount_name: 'supakorn.suk',
    cmuitaccount: 'supakorn.suk@cmu.ac.th',
    prename_TH: 'นาย',
    prename_EN: 'Mr.',
    firstname_TH: 'ศุภกร',
    firstname_EN: 'Supakorn',
    lastname_TH: 'สุขสมบูรณ์',
    lastname_EN: 'Suksomboon',
    student_id: '650610123',
    organization_code: '06',
    organization_name_TH: 'คณะวิศวกรรมศาสตร์ (สาขาวิศวกรรมคอมพิวเตอร์)',
    organization_name_EN: 'Faculty of Engineering (Computer Engineering)',
    itaccounttype_id: 'StdAcc',
    itaccounttype_TH: 'นักศึกษา',
    itaccounttype_EN: 'Student',
  },
  {
    cmuitaccount_name: 'chayanon.k',
    cmuitaccount: 'chayanon.k@cmu.ac.th',
    prename_TH: 'นาย',
    prename_EN: 'Mr.',
    firstname_TH: 'ชยานนท์',
    firstname_EN: 'Chayanon',
    lastname_TH: 'เกียรติวงศ์',
    lastname_EN: 'Kiatwong',
    student_id: '640610789',
    organization_code: '06',
    organization_name_TH: 'คณะวิศวกรรมศาสตร์ (สาขาวิศวกรรมไฟฟ้า)',
    organization_name_EN: 'Faculty of Engineering (Electrical Engineering)',
    itaccounttype_id: 'StdAcc',
    itaccounttype_TH: 'นักศึกษา',
    itaccounttype_EN: 'Student',
  },
  {
    cmuitaccount_name: 'bimcub12345',
    cmuitaccount: 'bimcub12345@cmu.ac.th',
    prename_TH: 'นาย',
    prename_EN: 'Mr.',
    firstname_TH: 'แอดมินฝ่ายอาคาร',
    firstname_EN: 'Facility Admin',
    lastname_TH: 'มช.',
    lastname_EN: 'CMU Facilities',
    student_id: '',
    organization_code: '99',
    organization_name_TH: 'สำนักงานบริหารจัดการอาคารและสถานที่ มหาวิทยาลัยเชียงใหม่',
    organization_name_EN: 'CMU Physical Plant and Facility Services',
    itaccounttype_id: 'StaffAcc',
    itaccounttype_TH: 'บุคลากร',
    itaccounttype_EN: 'Staff',
  },
];

export function getStoredCMUUser(): CMUUserInfo | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function storeCMUUser(user: CMUUserInfo | null) {
  if (user) {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY_USER);
  }
}

export function getStoredCMUToken(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY_TOKEN) || localStorage.getItem('app_jwt_token');
  } catch {
    return null;
  }
}

export function storeCMUToken(token: string | null) {
  if (token) {
    localStorage.setItem(STORAGE_KEY_TOKEN, token);
    localStorage.setItem('app_jwt_token', token);
  } else {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem('app_jwt_token');
  }
}

export async function exchangeCMUCode(
  codeOrUrl: string,
  customRedirectUri?: string
): Promise<{ success: boolean; user?: CMUUserInfo; accessToken?: string; error?: string }> {
  try {
    const config = getCMUAuthConfig();
    let cleanCode = codeOrUrl.trim();
    if (!cleanCode) {
      return { success: false, error: 'กรุณาระบุ Authorization Code หรือ URL' };
    }

    let redirectUri = customRedirectUri || config.redirectUri;

    if (cleanCode.includes('?') || cleanCode.includes('code=')) {
      try {
        const urlObj = new URL(cleanCode.startsWith('http') ? cleanCode : `http://localhost:5173/${cleanCode}`);
        const parsedCode = urlObj.searchParams.get('code');
        if (parsedCode) {
          cleanCode = parsedCode;
        }

        if (codeOrUrl.trim().startsWith('http')) {
          redirectUri = urlObj.origin + urlObj.pathname;
        }
      } catch {
        const match = cleanCode.match(/code=([^&]+)/);
        if (match && match[1]) {
          cleanCode = decodeURIComponent(match[1]);
        }
      }
    }

    const payload = JSON.stringify({
      code: cleanCode,
      redirectUri,
      clientId: config.clientId,
    });

    let res = await fetch('/api/cmu-oauth/callback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
    });

    if (!res.ok) {
      res = await fetch('/auth/cmu/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      });
    }

    if (!res.ok) {
      const text = await res.text();
      return { success: false, error: `Server error ${res.status}: ${text}` };
    }

    const data = await res.json();
    if (data.success && (data.user || data.cmuProfile)) {
      const user = data.cmuProfile || data.user;
      if (data.accessToken) {
        storeCMUToken(data.accessToken);
      }
      return { success: true, user, accessToken: data.accessToken };
    }

    return {
      success: false,
      error: data.error || 'ไม่สามารถดึงข้อมูลผู้ใช้จาก CMU OAuth ได้',
    };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการเชื่อมต่อกับ CMU OAuth',
    };
  }
}

export async function directCmuBackendLogin(
  accountName: string,
  role: 'student' | 'admin'
): Promise<{ success: boolean; user?: CMUUserInfo; accessToken?: string; error?: string }> {
  try {
    let res = await fetch('/api/auth/cmu/test-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accountName, role }),
    });

    if (!res.ok) {
      res = await fetch('/auth/cmu/test-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accountName, role }),
      });
    }

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        if (data.accessToken) {
          storeCMUToken(data.accessToken);
        }
        return { success: true, user: data.cmuProfile || data.user, accessToken: data.accessToken };
      }
    }
  } catch {
    // backend not available or offline
  }
  return { success: false };
}
