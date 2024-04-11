import React from "react";
import cl from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <div className={cl.footerWrap}>
                    <h5 className={cl.footer__title}>ООО «АКДОР»</h5>
                    <div className={cl.footer__info}>
                        <div className={cl.footer__infoContacts}>
                            <div className={cl.footer__infoContacts_num}>
                                <span>Телефон:</span>
                                <a
                                    className={cl.footer__infoContacts_link}
                                    href="tel:+7(968) 628-78-44"
                                >
                                    <b>+7(968) 628-78-44</b>
                                </a>
                            </div>
                            <div className={cl.footer__infoContacts_email}>
                                <span>Email:</span>
                                <a
                                    className={cl.footer__infoContacts_link}
                                    href="mailto:info@akdor77.ru"
                                >
                                    <b>info@akdor77.ru</b>
                                </a>
                            </div>
                        </div>
                        <div className={cl.footer__infoAddr}>
                            <span className={cl.footer__infoAddr_title}>
                                Адрес:
                            </span>
                            <p className={cl.footer__infoAddr_place}>
                            115093, г. Москва,<br /> ул. Люсиновская, д.39, стр. 5, этаж 4, помещение II команата №4
                            </p>
                        </div>
                    </div>
                    <p className={cl.footer__copyright}>
                        Copyright © 2024 | АКДОР - akdor77.ru Все
                        права защищены
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
