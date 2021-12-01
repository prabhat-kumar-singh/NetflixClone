const Footer = ({children}) => {
    return(
        <div className = "footer">
            <div className = "content">
                <p>Questions? Call 000-800-040-1843</p>
                <div className = "content-items">
                    <div className = "items">
                        <div>
                            <p>FAQ</p>
                            <p>Investor Relation</p>
                            <p>Privacy</p>
                            <p>Test</p>
                        </div>
                        <div>
                            <p>Help Center</p>
                            <p>Jobs</p>
                            <p>Cookies Preference</p>
                            <p>Legal Notices</p>
                        </div>
                    </div>
                    <div className = "items">
                        <div>
                            <p>FAQ</p>
                            <p>Investor Relation</p>
                            <p>Privacy</p>
                            <p>Test</p>
                        </div>
                        <div>
                            <p>Help Center</p>
                            <p>Jobs</p>
                            <p>Cookies Preference</p>
                            <p>Legal Notices</p>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Footer;