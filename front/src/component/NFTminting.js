import React, { useState, useEffect } from 'react'
import { mintContract } from './NFTcontract';
import { Image } from '@chakra-ui/react'

function Minting() {

    const [account, setAccount] = useState("");
    const [characterCardArr, setCharacterCardArr] = useState()

    const getAccount = async() => {
        try {
            if(window.biport) {
            const accounts = await window.biport.request({
                method: "eth_requestAccounts"
            })
            setAccount(accounts[0]);
            } else {
            alert("install metamask")
            }
        } catch(error) {
            console.log(error)
        }
    }

    const mint = async() => {
        try{
            if(!account) return;
            const response = await mintContract.mintCharacterToken()
            response.wait().then( async() => {
                
                if(response.wait.length == 1){
                    const balanceLength = await mintContract.balanceOf(account);
                    console.log(balanceLength)
                    const characterTokenId = await mintContract.tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1)
                    console.log(characterTokenId)
                    const characterType = await mintContract.characterTypes(characterTokenId);
                    console.log(characterType);

                    //console.log(parseInt(balance._hex, 16));
                    let data = parseInt(characterType._hex, 16);
                    //setNewcharacterType(data)
                    console.log(data)
                }
            })
        } catch(err) {
            console.log(err)
        }
    }

    const myNFT = async() => {
        try {
            const balanceLength = await mintContract.balanceOf(account)
            console.log("balance : ", parseInt(balanceLength))

            const tempCharacterCardArr = []

            if (balanceLength == '0') return;
            
            for(let i = 0; i < parseInt(balanceLength); i++){

                const characterId = await mintContract.tokenOfOwnerByIndex(account, i)
                const characterType = await mintContract.characterTypes(parseInt(characterId))
                console.log(parseInt(characterType))

                //tempCharacterCardArr.push([parseInt(characterId), parseInt(characterType)])
                tempCharacterCardArr.push(parseInt(characterType))
            }

            console.log(tempCharacterCardArr)
            setCharacterCardArr(tempCharacterCardArr)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAccount()
    },[account])

    return (
        <>
        { account != null ? <div>{account}</div> : <div>test</div> }
        <button onClick={()=>mint()}>Mint</button>
        <button onClick={()=>myNFT()}>MyNFT</button>
        {
            characterCardArr ? 
            <Image
                width={150} 
                height={150} 
                src={`https://gateway.pinata.cloud/ipfs/QmbuWsv5M36bRgvSvWiaU2svBjCPayTaaMJJrvg6dddVw3/${characterCardArr[characterCardArr.length-1]}.png`}
                />
            
            : null
        }
        </>
        
    )
}

export default Minting