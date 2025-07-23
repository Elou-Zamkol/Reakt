import { Component } from "react";
import "./account.css";
import Logo from "../../ready-made elements for the page/logo/logo";
import Footer from "../../ready-made elements for the page/footer/footer";
import AtelierSlider from "../../ready-made elements for the page/AtelierSlider/AtelierSlider";
import withNavigation from "../../withNavigation";
import { withTranslation } from "react-i18next";

interface AccountProps {
  navigate: (path: string) => void;
  t: any;
}


class Account extends Component<AccountProps> {

    handleBranchesn = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.navigate('/branches');
    }


    render() {
        const { t } = this.props;
        return (

            <>
                <Logo />

                <div className="genre-menu">
                    <button data-genre="all" className="active">{t('all')}</button>
                    <button data-genre="portrait" onClick={this.handleBranchesn}>{t('view_branches')}</button>
                </div>


                <div className="account-conteyner">

                    <div className="thanks-message">
                        <h1>{t('thank_you_for_choosing_us')}</h1>
                        <p>{t('welcome_to_our_atelier')}</p>
                        <p>{t('our_team')}</p>
                        <p>{t('attention_to_details')}</p>
                        <p>{t('thankful_for_trust')}</p>
                        <p>{t('welcome_to_handmade_world')}</p>
                    </div>


                    <div className="service-blocks">
                        <div className="service-card">
                            <h1>{t('individual_sewing')}</h1>
                            <p>{t('individual_sewing_description')}</p>
                        </div>
                        <div className="service-card">
                            <h1>{t('repair_and_restoration')}</h1>
                            <p>{t('repair_and_restoration_description')}</p>
                        </div>
                        <div className="service-card">
                            <h1>{t('designer_collections')}</h1>
                            <p>{t('designer_collections_description')}</p>
                        </div>
                    </div>

                    <div className="atelier-history">
                        <h2>{t('our_history')}</h2>
                        <p>{t('our_history_description')}</p>
                        <p>{t('our_history_description_2')}</p>
                        <p>{t('our_history_description_3')}</p>
                        <p>{t('our_history_description_4')}</p>
                        <p>{t('our_history_description_5')}</p>
                        <p>{t('our_history_description_6')}</p>
                        <p>{t('our_history_description_7')}</p>
                        <p>{t('our_history_description_8')}</p>
                        <p>{t('our_history_description_9')}</p>
                        <p>{t('our_history_description_10')}</p>
                    </div>


                    <h1 className="zagolovok" style={{marginBottom: "60px"}}>{t('our_branches')}</h1>


                    <AtelierSlider size="large"/>


                    <div className="feedback-section">
                        <div className="client-reviews">

                            <h2>{t('client_reviews')}</h2>

                            <div className="review-list">
                                <div className="review">
                                    <p>{t('review_1')}</p>
                                    <span>— {t('review_1_author')}</span>
                                </div>

                                <div className="review">
                                    <p>{t('review_2')}</p>
                                    <span>— {t('review_2_author')}</span>
                                </div>

                                <div className="review">
                                    <p>{t('review_3')}</p>
                                    <span>— {t('review_3_author')}</span>
                                </div>

                                <div className="review">
                                    <p>{t('review_4')}</p>
                                    <span>— {t('review_4_author')}</span>
                                </div>

                                <div className="review">
                                    <p>{t('review_5')}</p>
                                    <span>— {t('review_5_author')}</span>
                                </div>

                                <div className="review">
                                    <p>{t('review_6')}</p>
                                    <span>— {t('review_6_author')}</span>
                                </div>

                            </div>
                        </div>



                        <div className="client-wishlist-modern">

                            <h2>{t('what_you_want_to_see')}</h2>

                            <div className="wishlist-grid">

                                <div className="wishlist-item">
                                    <span>📍</span>
                                    <p>{t('atelier_near_home')}</p>
                                </div>

                                <div className="wishlist-item">
                                    <span>🧵</span>
                                    <p>{t('online_order_with_try_on')}</p>
                                </div>

                                <div className="wishlist-item">
                                    <span>📦</span>
                                    <p>{t('delivery_of_finished_products')}</p>
                                </div>

                                <div className="wishlist-item">
                                    <span>📸</span>
                                    <p>{t('gallery_of_finished_works')}</p>
                                </div>

                                <div className="wishlist-item">
                                    <span>👗</span>
                                    <p>{t('online_fabric_catalog')}</p>
                                </div>

                                <div className="wishlist-item">
                                    <span>💬</span>
                                    <p>{t('chat_with_designer')}</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <section className="why-choose-us">
                        <h2>{t('why_choose_us')}</h2>
                        <div className="features">

                            <div className="feature">
                                <span className="icon">🎯</span>
                                <h3>{t('accuracy_and_quality')}</h3>
                                <p>{t('accuracy_and_quality_description')}</p>
                            </div>

                            <div className="feature">
                                <span className="icon">⏰</span>
                                <h3>{t('meeting_deadlines')}</h3>
                                <p>{t('meeting_deadlines_description')}</p>
                            </div>

                            <div className="feature">
                                <span className="icon">❤️</span>
                                <h3>{t('individual_approach')}</h3>
                                <p>{t('individual_approach_description')}</p>
                            </div>

                            <div className="feature">
                                <span className="icon">💼</span>
                                <h3>{t('professional_team')}</h3>
                                <p>{t('professional_team_description')}</p>
                            </div>
                        </div>
                    </section>


                </div>




                <Footer />
            </>


        );
    }
}

export default withNavigation(withTranslation()(Account));
