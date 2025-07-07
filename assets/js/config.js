export const BASE_URL = 'https://686b26fee559eba908719a21.mockapi.io';

export const OPTIONS = {
        showBanner: true,
        warnOnBlur: true,
};

// API endpoint paths
export const NAV_ITEMS_ENDPOINT = 'nav';
export const BANNER_ENDPOINT = 'banner';

// Valid data endpoints referenced in scripts
export const ENDPOINTS = [
        'home',
        'about',
        'classes',
        'history',
        'policy',
        'contact',
        'events',
        'gallery',
        'nav',
];

// Confirmation flags for unsaved change prompts
export const CONFIRM_FLAGS = {
        save: { value: false },
        delete: { value: false },
        reset: { value: false },
        close: { value: false },
};

// Standard JSON request headers
export const JSON_HEADERS = { 'Content-Type': 'application/json' };

// DHCP type options used for dropdowns
export const DHCP_TYPES = ['host', 'ip', 'url', 'file', 'service'];
