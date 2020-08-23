import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountAccordion from '../components/Account'
import Contact from "../components/Contact";
import IconHeader from "../../components/IconHeader";
import Address from "../components/Address";
import Communication from "../components/Communication";

export default function Account (props) {
    React.useEffect(() => {
        // if(props.account === null) {
        //     history.push("/overview")
        // }
    })

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={4} style={{borderRight:'1px solid lightgray'}}>
                    <IconHeader icon="AccountBalance" title="Kunde" />
                    <AccountAccordion
                        account={props.account}
                        save={props.saveAccount}
                    />
                    <IconHeader icon="AccountBox" title="Kontakte" />
                    {props.account.contacts.map((contact) =>
                        <Contact
                            contact={contact}
                            save={props.saveContact}
                            // saveContact={props.saveContact}
                        />
                    )}
                    <IconHeader icon="LocationOn" title="Adressen" />
                    {props.account.addresses.map((address) =>
                        <Address address={address} />
                    )}
                </Grid>
                <Grid item xs={8}>
                    <IconHeader icon="Message" title="Kommunikation" />
                    {props.account.communications.map((communication) =>
                        <Communication communication={communication} />
                    )}
                </Grid>
            </Grid>
        </div>
    )
}