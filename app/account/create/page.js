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
    const [initLoad, setInitLoad] = useState(true)
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

    const isValidMob = (mob) => {
        const regex = /^(0|\+|00)?(\d{10}|\d{6,14})$/;
        return regex.test(mob);
      };

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const isValidPW = (pw) => {
        return pw.length >= 8;
    };

    const submitHandler = e => {
        e.preventDefault();
        setInitLoad(false)

        // Perform form validation
        if (user.fullName.trim() === '') {
            return;
        }
        if (user.mob.trim() === '') {
            return;
        }
        if (user.email.trim() === '') {
            return;
        }
        if (user.pw.trim() === '') {
            return;
        }
        
        !isValidMob(user.mob) && setUser({...user, mob: ''})
        !isValidEmail(user.email) && setUser({...user, email: ''})
        !isValidPW(user.pw) && setUser({...user, pw: ''})
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
                            <div className={styles['sign-up']} style={{ fontWeight: '500' }}>Sign Up</div>
                            <form className={styles['sign-up-form']} onSubmit={submitHandler}>

                                <div className={styles['error-container']}><div style={{ display: initLoad? 'none': user.fullName? 'none':'block' }}>Name is required</div></div>
                                <div><input type="text" name="fullName" value={user.fullName} onChange={changeHandler} placeholder="Full Name" maxLength="50" /></div>

                                <div className={styles['error-container']}><div style={{ display: initLoad? 'none': user.mob? 'none':'block' }}>Valid phone number is required</div></div>
                                <div><input type="phone" name="mob" value={user.mob} onChange={changeHandler} maxLength="15" /></div>

                                <div className={styles['error-container']}><div style={{ display: initLoad? 'none': user.email? 'none':'block' }}>Valid email is required</div></div>
                                <div><input type="email" name="email" value={user.email} onChange={changeHandler} placeholder="email" maxLength="70" /></div>

                                <div className={styles['error-container']}><div style={{ display: initLoad? 'none': user.pw? 'none':'block' }}>Password at least 8 characters is required</div></div>
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
                    <div className="row"><div className={`col ms-5 g-0 ${styles['three-dot']}`}><span></span><span></span><span></span></div></div>
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