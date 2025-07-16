import cookie from 'js-cookie'

// cookies management
// Set in Cookie
export const setCookie = (key, value) => {
    if (window !== 'undefiend') {
        cookie.set(key, value, {
            // 1 Day
            expires: 1
        })
    }
}

// Remove from Cookie
export const removeCookie = key => {
    if (window !== 'undefiend') {
        cookie.remove(key, {
            expires: 1
        })
    }
}

// Get from cookie like token
export const getCookie = key => {
    if (window !== 'undefined') {
        return cookie.get(key)
    }
}


//@ redux management
//-- user

// Auth user after login for vendor
export const setAuth = (token, next) => {
    setCookie('overseas-token', token)
    next()
}


// Auth user after login for vendor
export const removeAuth = (next) => {
    removeCookie('overseas-token')
    next()
}


export const getAuth = () => {
    if (window !== 'undefiend') {
        const cookieChecked = getCookie('overseas-token')
        if (cookieChecked) {
            return cookieChecked
        } else {
            return false
        }
    }
}