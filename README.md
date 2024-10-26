# WiFi Portal Page for Apfree-Wifidog  

This project aims to develop a customizable and user-friendly **WiFi captive portal page** designed for integration with **Apfree-Wifidog**, an open-source captive portal solution. The captive portal allows network administrators to control access to WiFi networks, presenting users with a web page to authenticate, agree to terms, or perform other required actions before accessing the internet.

## Features  
- **Customizable Landing Page:** Design a responsive and visually appealing portal page that reflects the network’s branding or requirements.  
- **User Authentication:** Support for various authentication methods, including:
  - Login with username and password  
  - OAuth-based login (Google, Facebook, etc.)  
  - Voucher or token-based access  
- **Terms of Service Acceptance:** Option to require users to agree to terms and conditions before gaining internet access.  
- **Multi-language Support:** Easily adaptable to multiple languages for global deployments.  
- **Seamless Integration with Apfree-Wifidog:** Compatible with Apfree-Wifidog’s redirection rules for captive portals.  
- **Session Management:** Track session status to prevent unnecessary logins or interruptions.  
- **Mobile-Friendly Design:** Optimized for smartphones, tablets, and desktop devices.

## Installation and Setup  
1. **Clone the repository:**
   ```bash
   git clone https://github.com/liudf0716/wifi-portal.git
   cd wifi-portal
   ```
2. **Configure Apfree-Wifidog:**  
   Modify the Wifidog configuration to redirect unauthenticated users to the portal page URL.

3. **Modify Portal Settings:**  
   Update the portal’s configuration file (e.g., `config.json`) with your authentication details, branding, and other preferences.

4. **Run the Portal Server:**  
   Use a web server like Nginx, Apache, or a Node.js server to host the portal page. Example with Node.js:  
   ```bash
   npm install  
   npm run build
   ```

## Usage  
- **Access Control:** Users will be redirected to the portal page upon connecting to the WiFi network.  
- **Authentication Flow:** After successful authentication or agreement to terms, users are granted internet access based on the Apfree-Wifidog rules.

## Contributing  
We welcome contributions from the community! If you’d like to contribute:
1. Fork the repository.  
2. Create a new branch for your feature or bug fix.  
3. Submit a pull request with a detailed description of your changes.

## License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact  
For questions or support, feel free to open an issue in the repository or contact the project maintainer at:  
📧 **liudf0716@gmail.com**


