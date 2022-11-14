export const BasicInfoInput = ({styles, personalInfo, inputPersonalInfo}:any) => {
    return <>
        <section className={styles.info_form}>
            <input className={styles.input} type="text" name="name" onChange={inputPersonalInfo} value={personalInfo.name} placeholder="First name" autoComplete='given-name' maxLength={20} />
            <label className={styles.label}>Enter your name</label> 
            <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label>
        </section>
        <section className={styles.info_form}>
            <input className={styles.input} type="email" name="email" onChange={inputPersonalInfo} value={personalInfo.email} placeholder="example@exam.com" autoComplete='email' />
            <label className={styles.label}>Enter your email</label> 
            {/* <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label> */}
        </section>
        <section className={styles.info_form}>
            <input className={styles.input} type="number" name="age" onChange={inputPersonalInfo} value={personalInfo.age} placeholder="Age" min={0} max={50} />
            <label className={styles.label}>Your age will be privately saved.</label> 
            {/* <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label> */}
        </section>
    </>
};

export const FinLevelInput = ({styles, personalInfo, inputPersonalInfo}:any) => {
    return <>
        <section className={styles.info_form}>
            <input className={styles.input} type="text" name="name" onChange={inputPersonalInfo} value={personalInfo.name} placeholder="First name" autoComplete='given-name' maxLength={20} />
            <label className={styles.label}>Enter your name</label> 
            <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label>
        </section>
        <section className={styles.info_form}>
            <input className={styles.input} type="email" name="email" onChange={inputPersonalInfo} value={personalInfo.email} placeholder="example@exam.com" autoComplete='email' />
            <label className={styles.label}>Enter your email</label> 
            {/* <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label> */}
        </section>
        <section className={styles.info_form}>
            <input className={styles.input} type="number" name="age" onChange={inputPersonalInfo} value={personalInfo.age} placeholder="2003" />
            <label className={styles.label}>Your age will be privately saved.</label> 
            {/* <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label> */}
        </section>
    </>
}