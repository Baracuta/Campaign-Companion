import NavButton from "../components/NavButton"
import styles from "../css_modules/form.module.css"

//This page is for the campaign creation form
function CampaignForm(){

    return(
        <main>

            <div>
                <NavButton text="Home" destination="/"/>
            </div>

            <div className={styles.form_body}>

                <div id={styles.section1}>
                    <p>What game system does this campaign use?</p>
                    <input type="text" />
                </div>

                <div id={styles.section2}>
                    <p>What would you like to name this campaign?</p>
                    <input type="text" />
                </div>

                <div id={styles.section3}>
                    <p>How many players are in this campaign?</p>
                    <input/>
                </div>

                <button>Create Campaign</button>

                <NavButton text="Campaign Page" destination="/campaign/:id"/>

            </div>


        </main>
    )
}

export default CampaignForm