import AccountHeader from "./AccountHeader";
function AccountSection() {
  return (
    <div className="d-flex flex-column ms-4">
      <AccountHeader />
      <div className="mb-4 profile-section">
        <h2>Contact</h2>
        No registered services, you can add some on the settings page.
      </div>
      <div className="mb-4 profile-section">
        <h3>Biography</h3>
        Hello, I'm Xingdong Li, a Computer Science enthusiast currently
        navigating my Master's journey at The Roux Institute, Northeastern
        University. My expertise lies at the crossroads of advanced data
        structures, intricate algorithms, and versatile software paradigms.
      </div>
      <div className="mb-4 profile-section">
        <h3>Links</h3>
        <ul id="links-list">
        <li>
            <a href="https://www.linkedin.com/in/xingdong-li-7797a21ba/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-link me-1"></i>
                LinkedIn
                <i className="fa-solid fa-arrow-right-from-bracket ms-1"></i>
            </a>
        </li>
          <li>
            <a href="https://www.instagram.com/sheldonlee166/" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-link me-1"></i>
              Instagram
              <i className="fa-solid fa-arrow-right-from-bracket ms-1"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountSection;
