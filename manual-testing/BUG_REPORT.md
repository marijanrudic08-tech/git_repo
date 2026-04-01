# BUG REPORT

---

## BUG-001: Application uses HTTP instead of HTTPS

**Description:**  
The application is served over HTTP instead of HTTPS, which exposes user data to potential interception and security risks.

**Severity:** High  
**Priority:** High  

**Steps to reproduce:**
1. Open the application in a browser
2. Check the URL in the address bar

**Expected result:**  
The application should be served over HTTPS.

**Actual result:**  
The application is served over HTTP.

---

## BUG-002: Missing alt attributes on images

**Description:**  
Images in the gallery do not include alt attributes, making the content inaccessible to users relying on screen readers.

**Severity:** Medium  
**Priority:** Medium  

**Steps to reproduce:**
1. Open the gallery page
2. Inspect image elements in the browser
3. Check for alt attributes

**Expected result:**  
Each image should contain a meaningful alt attribute.

**Actual result:**  
Images do not have alt attributes.

---

## BUG-003: High-resolution images cause slow load times

**Description:**  
Images appear to be served without optimization or compression, leading to slower loading times and reduced performance.

**Severity:** Medium  
**Priority:** Medium  

**Steps to reproduce:**
1. Open the application
2. Observe image loading time
3. Check network tab for image sizes

**Expected result:**  
Images should be optimized for web use.

**Actual result:**  
Images are large and load slowly.

---

## BUG-004: Placeholder title and meta tags

**Description:**  
The page uses generic placeholder values such as "Baasic Starter Kit" instead of meaningful metadata.

**Severity:** Low  
**Priority:** Medium  

**Steps to reproduce:**
1. Open the application
2. Inspect the page source
3. Check the <title> and meta tags

**Expected result:**  
Metadata should reflect the purpose of the application.

**Actual result:**  
Placeholder metadata is used.

---

## BUG-005: Layout breaks on very small screen sizes

**Description:**  
On very small screen widths (below ~320px), elements overlap and the layout becomes unusable.

**Severity:** Medium  
**Priority:** Medium  

**Steps to reproduce:**
1. Open the application
2. Resize the browser to a very small width (or use mobile dev tools)
3. Observe layout behavior

**Expected result:**  
Layout should remain usable across screen sizes.

**Actual result:**  
Elements overlap and break the layout.

---

## BUG-006: Navigation elements too small on mobile

**Description:**  
Buttons and links are too small for comfortable interaction on mobile devices, reducing usability.

**Severity:** Low  
**Priority:** Medium  

**Steps to reproduce:**
1. Open the application on a mobile device or emulator
2. Try interacting with navigation elements

**Expected result:**  
Interactive elements should be easily tappable.

**Actual result:**  
Elements are small and difficult to tap.

---

## BUG-007: Missing favicon causes console error

**Description:**  
The application does not include a favicon, resulting in a 404 error in the browser console.

**Severity:** Low  
**Priority:** Low  

**Steps to reproduce:**
1. Open the application
2. Open browser developer tools (console)
3. Observe network errors

**Expected result:**  
Favicon should be present and load successfully.

**Actual result:**  
A 404 error is triggered for the favicon.

---

## BUG-008: No user feedback when API fails to load images

**Description:**  
If the image API fails, the application does not display any error message or fallback state, leaving the page blank.

**Severity:** High  
**Priority:** High  

**Steps to reproduce:**
1. Simulate network/API failure (disable network or block requests)
2. Reload the page

**Expected result:**  
User should see an error message or fallback UI.

**Actual result:**  
Page remains blank with no feedback.

---