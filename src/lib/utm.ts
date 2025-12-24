// UTM Tracking Utility
// Captures UTM parameters from URL and stores them for form submissions

export interface UTMParams {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
}

const UTM_STORAGE_KEY = 'gold_hire_utm_params';

export function captureUTMParams(): UTMParams {
  const params = new URLSearchParams(window.location.search);
  
  const utmParams: UTMParams = {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_content: params.get('utm_content'),
    utm_term: params.get('utm_term'),
  };

  // Store if any UTM params exist
  if (Object.values(utmParams).some(v => v !== null)) {
    try {
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmParams));
    } catch (e) {
      console.warn('Failed to store UTM params:', e);
    }
  }

  return utmParams;
}

export function getStoredUTMParams(): UTMParams {
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to retrieve UTM params:', e);
  }
  
  return {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_content: null,
    utm_term: null,
  };
}

export function getUTMParams(): UTMParams {
  // First try to get from current URL
  const currentParams = captureUTMParams();
  
  // If no current params, fallback to stored
  if (Object.values(currentParams).every(v => v === null)) {
    return getStoredUTMParams();
  }
  
  return currentParams;
}

export function clearUTMParams(): void {
  try {
    localStorage.removeItem(UTM_STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear UTM params:', e);
  }
}
