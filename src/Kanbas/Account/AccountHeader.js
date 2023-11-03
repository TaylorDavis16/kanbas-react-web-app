function AccountHeader() {
  return (
    <div id="header-container">
      <div className="me-auto">
      <span className="fa-stack fa-3x mb-3" id="profile-avatar">
    <img 
        src="/resources/profile.jpg" 
        alt="Profile" 
        className="fa-stack-2x" 
        style={{ 
            borderRadius: '50%', 
            objectFit: 'cover',
            width: '100%', 
            height: '100%',
        }} 
    />
</span>

        <div className="float-end">
          <a href="./" onClick={(e) => e.preventDefault()} className="btn btn-primary override-btn">
            <i className="fa-solid fa-pencil"></i>
            Edit Profile
          </a>
        </div>
        <h2 className="mb-5" id="username">
          Xingdong Li
        </h2>
      </div>
    </div>
  );
}

export default AccountHeader;
