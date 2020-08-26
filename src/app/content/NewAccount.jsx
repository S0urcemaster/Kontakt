import React, {useEffect, useLayoutEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import AccountAccordion from '../components/Account'
import Contact from "../components/Contact";
import IconHeader from "../../components/IconHeader";
import Address from "../components/Address";
import Communication from "../components/Communication";
import {useParams} from "react-router";
import axios from "axios";

export default function NewAccount (props) {

    const emptyAccount = {
        name:'',
        accountManager:props.user.firstname +' ' +props.user.lastname,
        level:'',
        verbotskunde:'',
        sector:'',
        nextContact:'',
        mnemonic:'',
        contacts:[
            {
                firstname:'',
                lastname:'',
                department:'',
                position:'',
                remarks:[
                    {
                        text:'',
                        type:{id:1, name:''}}
                ],
                connections:[
                    {data:'', type:{id:1, name:''}}
                ]
            }
        ],
        addresses:[
            {
                name1:'',
                name2:'',
                name3:'',
                street:'',
                zip:'',
                countryCode:'',
                town:'',
                type:{id:1, name:''},
                remarks:[
                    {text:'', type:{id:1, name:''}}
                ],
                connections:[
                    {data:'', type:{id:1, name:''}}
                ]
            }
        ]
    }

    const [account, setAccount] = useState(emptyAccount);

    function saveAccount (account) {
        console.log('save: ', account)
        setAccount(prevState => {
            return {
                ...prevState,
                ...account
            }
        })
        // setAlertOpen(true);
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={4} style={{borderRight:'1px solid lightgray'}}>
                <IconHeader iconLeft="AccountBalance" iconRight="More" title="Kunde"
                            menuItems={[
                                {title:'New', callback:() => {}},
                            ]}
                />
                <AccountAccordion
                    account={account}
                    save={saveAccount}
                />
            </Grid>
            <Grid item xs={4} style={{borderRight:'1px solid lightgray'}}>
                <IconHeader iconLeft="AccountBox" iconRight="Add" title="Kontakte" />
                {account.contacts ? account.contacts.map((contact) =>
                    <Contact
                        key={contact.id}
                        contact={contact}
                        // save={saveContact}
                    />
                ):[]}
            </Grid>
            <Grid item xs={4} style={{borderRight:'1px solid lightgray'}}>
                <IconHeader iconLeft="LocationOn" iconRight="Add" title="Adressen" />
                {account.addresses ? account.addresses.map((address) =>
                    <Address key={address.id} address={address} />
                ): []}
            </Grid>
        </Grid>
    )
}