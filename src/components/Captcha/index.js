import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = (props) => (
    <div id="captcha-div">
        <ReCAPTCHA
            sitekey="6LeZlUcUAAAAANpoV3MnkdhxOR3RBreLIEryMCos"
            onChange={response => props.input.onChange(response)}
        />
        <div className="text-help">{props.meta.touched && props.meta.error}</div>
    </div>
);

export default Captcha;