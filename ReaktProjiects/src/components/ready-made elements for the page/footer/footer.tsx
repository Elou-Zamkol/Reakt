import "./footer.css"
import { useTranslation } from "react-i18next";

function Footer () {

    const { t } = useTranslation();

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-columns">

                    <div className="footer-col">
                        <div className="footer-col-title">{t('footer_info')}</div>
                        <a href="#" className="footer-link">{t('footer_prices')}</a>
                        <a href="#" className="footer-link">{t('footer_about')}</a>
                        <a href="#" className="footer-link">{t('footer_api')}</a>
                        <a href="#" className="footer-link">{t('footer_jobs')}</a>
                        <a href="#" className="footer-link">{t('footer_sell_content')}</a>
                        <a href="#" className="footer-link">{t('footer_brand_guide')}</a>
                        <a href="#" className="footer-link">{t('footer_events')}</a>
                        <a href="#" className="footer-link">{t('footer_trends')}</a>
                        <a href="#" className="footer-link">{t('footer_blog')}</a>
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-title">{t('footer_law')}</div>
                        <a href="#" className="footer-link">{t('footer_terms')}</a>
                        <a href="#" className="footer-link">{t('footer_license')}</a>
                        <a href="#" className="footer-link">{t('footer_privacy')}</a>
                        <a href="#" className="footer-link">{t('footer_copyright')}</a>
                        <a href="#" className="footer-link">{t('footer_cookie_policy')}</a>
                        <a href="#" className="footer-link">{t('footer_cookie_settings')}</a>
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-title">{t('footer_support')}</div>
                        <a href="#" className="footer-link">{t('footer_docs')}</a>
                        <a href="#" className="footer-link">{t('footer_faq')}</a>
                        <a href="#" className="footer-link">{t('footer_contacts')}</a>
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-title">{t('footer_social')}</div>
                        <a href="#" className="footer-link">{t('footer_facebook')}</a>
                        <a href="#" className="footer-link">{t('footer_twitter')}</a>
                        <a href="#" className="footer-link">{t('footer_pinterest')}</a>
                        <a href="#" className="footer-link">{t('footer_instagram')}</a>
                        <a href="#" className="footer-link">{t('footer_youtube')}</a>
                        <a href="#" className="footer-link">{t('footer_linkedin')}</a>
                        <a href="#" className="footer-link">{t('footer_discord')}</a>
                        <a href="#" className="footer-link">{t('footer_reddit')}</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <div className="footer-logo-group">
                        <span>{t('footer_copyright_text')} {t('footer_rights')}</span>
                    </div>
                </div>


                <div className="footer-projects">
                    <a href="#" className="footer-project-link">{t('footer_projects_freepik_company')}</a>
                    <a href="#" className="footer-project-link">{t('footer_projects_freepik')}</a>
                    <a href="#" className="footer-project-link">{t('footer_projects_slidesgo')}</a>
                    <a href="#" className="footer-project-link">{t('footer_projects_magnific')}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer