// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXX') {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }
};

// Generic event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXX') {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};

// Business-specific tracking functions
export const trackContactForm = () => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'contact_form',
  });
};

export const trackPhoneCall = (branch: string) => {
  event({
    action: 'phone_call_click',
    category: 'engagement',
    label: branch,
  });
};

export const trackProgramClick = (programName: string) => {
  event({
    action: 'program_click',
    category: 'engagement',
    label: programName,
  });
};

export const trackFormStart = (formName: string) => {
  event({
    action: 'form_start',
    category: 'contact',
    label: formName,
  });
};

export const trackFormComplete = (formName: string) => {
  event({
    action: 'form_complete',
    category: 'contact',
    label: formName,
  });
};

export const trackFormError = (formName: string, errorType: string) => {
  event({
    action: 'form_error',
    category: 'contact',
    label: `${formName} - ${errorType}`,
  });
};

export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

export const trackTimeOnPage = (timeInSeconds: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: `${timeInSeconds} seconds`,
    value: timeInSeconds,
  });
};

