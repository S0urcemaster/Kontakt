import React, {useEffect, useLayoutEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import AccountAccordion from '../components/Account'
import Contact from "../components/Contact";
import IconHeader from "../../components/IconHeader";
import Address from "../components/Address";
import Communication from "../components/Communication";
import {useParams} from "react-router";
import axios from "axios";

export default function Account (props) {

    const [account, setAccount] = useState(null);

    const {id} = useParams()

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

    useEffect(() => {
        console.log('id: ', id)
        if(id === "new") {
            console.log('new: ', id)
            setAccount(emptyAccount)
            return
        }
        axios.get(`https://digi-craft.de/customerboard/json/account/`+id)
            .then(res => {
                console.log('get: ', res.data.result)
                setAccount(res.data.result)
            })
    }, [id])

    useEffect(() => {
        if(account) {
            console.log('loaded: ', account)
            props.loaded(account)
        }
    }, [account])

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

    function newAccount() {

    }

    function exportAccount () {
        const a = document.createElement("a");
        const file = new Blob([JSON.stringify(account)], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = account.name +".json";
        a.click();
        a.remove();
    }

    function importAccount () {

    }

    function saveContact(contact) {
        //save contact
        //reload account
        // setAlertOpen(true)
    }

    return (account ?
        <div>
            <Grid container spacing={0}>
                <Grid item xs={4} style={{borderRight:'1px solid lightgray'}}>
                    <IconHeader iconLeft="AccountBalance" iconRight="More" title="Kunde"
                                menuItems={[
                                    {title:'New', callback:newAccount},
                                    {title:'Export', callback:exportAccount},
                                    {title:'Import', callback:importAccount},
                                ]}
                    />
                    <AccountAccordion
                        account={account}
                        save={saveAccount}
                    />
                    <IconHeader iconLeft="AccountBox" iconRight="Add" title="Kontakte" />
                    {account.contacts ? account.contacts.map((contact) =>
                        <Contact
                            key={contact.id}
                            contact={contact}
                            save={saveContact}
                        />
                    ):[]}
                    <IconHeader iconLeft="LocationOn" iconRight="Add" title="Adressen" />
                    {account.addresses ? account.addresses.map((address) =>
                        <Address key={address.id} address={address} />
                    ): []}
                </Grid>
                <Grid item xs={8}>
                    <IconHeader iconLeft="Message" iconRight="Add" title="Kommunikation" />
                    {account.communications ? account.communications.map((communication) =>
                        <Communication key={communication.id} communication={communication} />
                    ): []}
                </Grid>
            </Grid>
        </div> : null
    )
}