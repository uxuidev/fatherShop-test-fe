"use client"
import styles from "../../page.module.scss";
import '@fontsource/noto-sans';
import '@fontsource/noto-sans/200.css';
import '@fontsource/noto-sans/300.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/600.css';
import { useState } from "react";
import { collage1, collage2, collage3 } from "@/data/collage";

const Create = () => {
    const [user, setUser] = useState({
        fullName: '',
        mob: '',
        email: '',
        pw: '',
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        const prevUser = { ...user }
        setUser({
            ...prevUser,
            [name]: value,
        });
    };

    return (
        <div className="container-fluid" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className={`col p-4 text-start ${styles['lan']}`}>
                            <img src="/imgs/lan/lan-globe.svg" alt="Globe" />
                            <span>English</span>
                            <img src="/imgs/lan/lan-down.svg" alt="Lan Selection" />
                        </div>
                    </div>
                    <div className={`row ${styles['centered-row']}`}>
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                            <div><img src="/imgs/logo/fathershop-white-logo2.png" alt="Logo" style={{ width: '245px', height: 'auto' }} /></div>
                            <div className={styles['sign-up']} style={{fontWeight: '500'}}>Sign Up</div>
                            <form className={styles['sign-up-form']}>
                                <div><input type="text" name="fullName" value={user.fullName} onChange={changeHandler} placeholder="Full Name" maxLength="50" /></div>
                                <div><input type="phone" name="mob" value={user.mob} onChange={changeHandler} maxLength="10" id="phone" /></div>
                                <div><input type="email" name="email" value={user.email} onChange={changeHandler} placeholder="email" maxLength="70" /></div>
                                <div><input type="password" name="pw" value={user.pw} onChange={changeHandler} placeholder="Password" maxLength="30" /></div>
                                <div><input type="submit" className={styles['btn-create']} value="Create Account" /></div>
                            </form>
                            <span style={{ fontWeight: '300', fontSize: '14px' }}>Already have an account</span> <span style={{ fontWeight: '400', fontSize: '14px' }}>Login</span>
                        </div>
                    </div>
                    <div className={styles['bottom-text']}>
                        <span style={{ fontWeight: '300', fontSize: '14px' }}>By signing up you agree to our</span> <span style={{ fontWeight: '400', fontSize: '14px' }}>Terms & Conditions</span>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 ${styles['right-view']}`}>
                    <div className="row">
                        <div className="col-12 pt-5 px-5" style={{ fontWeight: '600' }}>
                            <h4>Millions of Product Ready to Dropship</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-2 px-5">
                            <p style={{ fontWeight: '200' }}>Millions of Product Ready to Dropship. Millions of Product Ready
                                to Dropship. Millions of Product Ready to Dropship.</p>
                        </div>
                    </div>
                    <div className={`row ${styles['collage-container']}`}>
                        <div className="col-4">
                            {
                                collage1.map((img, index) => (
                                    <div key={index} className="mt-3 text-end">
                                        <img src={img.src} alt='product' className="img-fluid" />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-4">
                            {
                                collage2.map((img, index) => (
                                    <div key={index} className="mt-3 text-center">
                                        <img src={img.src} alt='product' className="img-fluid" />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-4">
                            {
                                collage3.map((img, index) => (
                                    <div key={index} className="mt-3 text-start">
                                        <img src={img.src} alt='product' className="img-fluid" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create