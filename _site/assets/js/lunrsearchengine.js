
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About The Nakamoto",
    "body": "This website is meant for educational purposes and as a means to help bridge the gap between today and the future. Contribute: If you'd like to contribute to The Nakamoto please visit our Github to learn how to add an article. Questions or bug reports?: Email us here. DonateThanks for reading The Nakamoto, if you'd like to donate to maintain the site, feel free to use the below crypto addresses to donate ♥️. BTCbc1q0egszx2yz5xql3m90dxax0s92q6a5gxynwver2LTCLNGygFFnwXUPugHSHpBVo6de4FEBLsEUJM"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Latest:                                                                                                                                                                                                           Welcome to The Nakamoto                              :               The Nakamoto is a place to learn and share ideas. This article is a primer on who we are, and how to use this site. . . :                                                                                                                                                                       Tiaan Wolmarans                                01 Sep 2020                                                                                                                                  All:                                                                                                     Sacling Money I              :       This series covers my first draft of the various chapters for my upcoming book. These articles have not been through fact checks or editing and will not be the final. . . :                                                                               Tiaan Wolmarans                21 Feb 2020                                                                                                                                     What are UTXO's?              :       Scaling is one of the most talked-about things when it comes to blockchain, its the endless battle of trying to balance security, speed, and storage. :                                                                               Tiaan Wolmarans                14 Feb 2020                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/welcome/",
    "title": "Welcome to The Nakamoto",
    "body": "2020/09/01 - The Nakamoto is a place to learn and share ideas. This article is a primer on who we are, and how to use this site to learn about sound money, crytpocurrency and blockchains. We’d love your comments and feedback on our articles and we’re always looking for new topics and contributors. Feel free to tweet us for requests. Tiaan "
    }, {
    "id": 6,
    "url": "http://localhost:4000/Scaling-money/",
    "title": "Sacling Money I",
    "body": "2020/02/21 - This series covers my first draft of the various chapters for my upcoming book. These articles have not been through fact checks or editing and will not be the final version. Bartering — The first kind of money: What is money, why does it exist and when did it come to be? To start answering these questions, we need to look back to when we lived in small groups, tribes or villages. This is the first time we see the most basic form of money — Not the kind we see today, or even the types of money we read about in history books, like shells, beads or salt — the first kind of money is simply anything of value, that is exchangeable. Exchanging forms the foundation of human life, without exchanges, we would have essentially no society. From a young age we start inventing forms of money by placing value on our possessions, and offering them to the markets we have access to. Even before kindergarten, you will likely have experienced some form of exchange, whether it was trading marbles, action figures or collectible cards, within your school an economy around every kids possessions was formed. Some kids participated and some didn’t, but it was there. This economy however, is limited, and is dependent on everyone owning something of value to participate. But how is value determined? The value assigned by the owner is not always the value assigned by the market, so when I want to trade my blue marbles for red ones, I might decide that one blue marble is worth two red ones. My classmate however, might view blue and red marbles equally, so he might counter my offer and if we then agree that they are of equal value, we set the price for an exchange of blue and red marbles. In another scenario, my classmate may have too many red marbles, and too few blue ones, making red marbles more valuable than blue ones to me, and blue marbles more valuable to him. In both examples, the exchange between us is voluntary, and the only reason that the trade happens is because we both expect to benefit from it. We both benefit from it because we both perceive what we give up to be less valuable than what we get back. Since I have an excess of blue marbles, and my classmate an excess of red, we value the marbles we already have lower than the ones we need because our supply exceeds our requirements. A common misconception is that when an exchange takes place, it’s a record of the value of the items exchanged, but this simply isn’t the case. If I exchange a cup of coffee for a 1 carat diamond, it doesn’t mean that diamonds are worth less after that exchange, nor does it make coffee worth more. All that an exchange measures is the value of the items relative to those making the exchange. (This is something we’ll come back to when we discuss Bitcoin later)Exchanging goods and services was and is the absolute foundation of society, this is because every person, their circumstances and skills differ. An egg farmer values fish more than eggs since he can obtain eggs with ease, but not fish. The limitations of barter: Even though the exchange of goods is so fundamentally important to our survival as individuals and as a species, it would be impossible to scale because this type of direct exchange isn’t much more efficient than living off the grid and being able to self-sustain. Take our egg farmer for example; she wants to build a new coop, and in a world without money, she offers to pay with what she has — eggs. The first problem we face is that not everyone needs or wants eggs, so the people she hires to build her coop may not all accept eggs as payment. The second issue is that the items you exchange are not always easily divisible. While eggs are a reasonably small item and individual eggs are relatively inexpensive, so can be used to buy more expensive items, a shoemaker could hardly separate a pair of shoes to pay for something because a $100 pair of shoes is worth very little to nothing if you only have one of them. This also doesn’t mean that items that can be easily divisible are easier to transact with, because you then run into the first problem, where you may not be able to exchange what you have for what you need. This creates a scenario where you may have to jump through various sets of goods to buy the item that you actually want. Say our egg farmer wants shoes, but our shoemaker doesn’t want eggs, he wants cheese, and our cheesemaker wants milk, and our dairy farmer wants eggs. The Egg farmer has to sell their eggs for milk, then sell the milk for cheese, and the cheese for shoes, and then she finally gets the shoes she needed. Other than the huge effort that she has to go through to get the shoes, it also costs more to make multiple exchanges due to indivisibility, transport costs, and might even lose a little bit of value each time she makes an exchange on her journey to new shoes. Primitive Money: Being the efficiency loving beings that we are, humans figured out how to scale economies by indirect exchange. Indirect exchange is the process of the egg farmer buying and selling into one or more other products in order to buy what she actually needs, based on the needs of the seller of the item she wants to buy. This is still an inefficient means of exchange, but indirect exchange lead us to discover (or invent — whichever you prefer) the mechanism of a medium of exchange. Let’s consider again our egg farmer. This time she needs to buy some tools for her farm. The Blacksmith doesn’t need eggs, but he does need salt, so our farmer buys salt and sells the salt for the tools she needs. On the other side of the village, the baker sells his bread for salt because he needs it for making bread, and also uses the salt to buy flour from the mill. In this scenario salt becomes incredibly marketable because everyone is confident that they will be able to sell salt to get the goods that they need. This in turn makes salt more valuable because it starts being used as a medium of exchange. This post is intended for informational purposes only. The views expressed in this post are not, and should not be construed as investment advice or recommendations. This article is not an offer, nor the solicitation of an offer, to buy or sell any of the assets or securities mentioned herein. All opinions in this post are my own. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/What-are-UTXOs/",
    "title": "What are UTXO's?",
    "body": "2020/02/14 - Scaling is one of the most talked-about things when it comes to blockchain, its the endless battle of trying to balance security, speed, and storage. This week, we’ll look at UTXO’s — something you might have heard of before, but didn’t quite grasp. Since this is a slightly more complicated topic, I’ll add reminders on what UTXO stands for (unspent transaction output). A UTXO (unspent transaction output) is the output of a transaction that a user receives and can spend in the future. As the name suggests, it is the unspent output of a transaction. Imagine a UTXO’s as paper money or coins. If you have thirty-seven dollars in your wallet or purse, you’ll have a combination of paper and coins in your possession that makes up the $37. The UTXO’s in your wallet or purse are the individual notes and coins that you hold. These are little chunks of money that you can use in any combination to make a purchase — just like “ real “ money! This is exactly the same in a Bitcoin wallet. When you open it, you see the $37 balance, and like your coins and papers, this balance could be made up of one or many UTXO’s (unspent transaction outputs). UTXO’s are even more similar to fiat money as we dig deeper. Sometimes you go to the store and want to buy a soda, and you may not have the exact change, maybe the soda costs $1. 50, and you only have a $10 bill. The way you purchase the soda is to overpay the teller at the store, and then the teller gives you back the difference (pay $10 and get $8. 50 in return). This is the same as spending money with Bitcoin. The network requires you to send at least one full UTXO to complete a transaction — You can’t pay for a $10 purchase by cutting a $20 bill in half, and the same can be said for a UTXO (unspent transaction output). If you want to buy something that costs 0. 4 bitcoins, and your wallets’ balance consists of two UTXO’s (unspent transaction outputs). The first UTXO being 0. 15BTC and the second being 0. 3 BTC making your total balance 0. 45 BTC. Since you don’t have a single UTXO or a combination that perfectly adds up to 0. 4 BTC, you send both UTXO’s out to the network (overpay the teller), the merchant then receives a UTXO of 0. 4 BTC, and you are sent back a new UTXO of 0. 05 BTC. But UTXO’s aren’t EXACTLY like cash: While in the most basic of terms a UTXO (unspent transaction output) can be compared to cash, there are a few differences: The most obvious initial difference is that with a cash transaction, you don’t pay any fees to a network, but with Bitcoin, you also have to factor in the fees paid to miners. The UTXO (unspent transaction output) that you receive if you use the same example as above, would be less than 0. 05 BTC because of the network fees you need to pay for your transaction to be added to a block. New UTXO = (total of original UTXO[s]) — (amount sent to a different address) — (transaction fees) The next way in which UTXO’s are different is that they, unlike fiat coins and bills, can be of any value. Fiat coins and bills’ values are determined by each respective government around the world. This is beneficial for a few reasons, for example, you could have a UTXO whose value equals a $1,000,000 but if you wanted the same in cash, you may have to carry 10,000 x $100 bills. The first hurdle: Developers are usually pretty good at identifying ways in which to optimise these packages to deliver performant and efficient UTXO’s that keep the data weight of the blockchain manageable — a critical aspect to scaling. More efficient UTXO generation means minimal data weight and optimal speed processing speeds. Blockchains aren’t always better than cash — when you have cash, you don’t know its entire history, and don’t need to either. Inversely, your Bitcoin wallet needs to know the number and quantity of UTXO’s that are associated with your address(es). This means that most blockchains that use UTXO’s (unspent transaction outputs) have the requirement that a UTXO can only be assembled or disassembled into smaller or larger sizes is when you are making a transaction. So if you never send or receive funds, the UTXO’s in your wallet can’t be adjusted. This is not a major drawback for end-users, however, there are circumstances where it may be better to be able to adjust the UTXO size before making a transaction. The first reason that comes to mind is privacy. You might want to minimise the information stored about any addresses associated with you, so receiving a UTXO in “change” after sending money to someone will result in more information about the end-user. One of the biggest issues with UTXO’s is the space it requires: The UTXO set is currently close to 4GB on disk, and can often can’t be entirely stored in memory as it’s bound by the block size limit. The UTXO (unspent transaction output) set can also grow as fast as the blockchain itself. In the case of Bitcoin, even after implementing SegWit, which reduces transaction sizes, there is still a close to 50% growth in the UTXO set. This implies that within the next few years we could see the UTXO set grow to close to 20GB, which may be impractical even if you consider Moore’s law, where computers may gain enough storage to run a full Bitcoin node with the most basic computers of the future but we also need to consider data usage, the push for more mobile blockchain solutions and countries where data or bandwidth are more difficult to come by or prohibitively expensive. This will pose an interesting challenge for Bitcoin and other blockchain developers, one which will certainly push developers to their limits both practically and creatively when working on this problem. This post is intended for informational purposes only. The views expressed in this post are not, and should not be construed as investment advice or recommendations. This article is not an offer, nor the solicitation of an offer, to buy or sell any of the assets or securities mentioned herein. All opinions in this post are my own. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found.</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});