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
            <input className={styles.input} type="number" inputMode="numeric" pattern="[0-9]*" name="age" onChange={inputPersonalInfo} value={personalInfo.age} placeholder="Your Age" min={0} max={50} maxLength={2} />
            <label className={styles.label}>Your age will be privately saved.</label> 
            {/* <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label> */}
        </section>
    </>
};

export const FinLevelInput = ({styles, personalInfo, inputPersonalInfo}:any) => {
    return <>
        <section className={styles.info_form}>
            <input className={styles.input} type="number" name="age" onChange={inputPersonalInfo} value={personalInfo.age} placeholder="Your Age" min={0} max={50} maxLength={2} />
            <label className={styles.label}>Your age will be privately saved.</label> 
            {/* <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label> */}
        </section>
        <section className={styles.info_form}>
            <input className={styles.input} type="text" name="location" onChange={inputPersonalInfo} value={personalInfo.location} placeholder="Country Name" />
            <label className={styles.label}>Current location</label> 
        </section>

    </>
}