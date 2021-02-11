import React from 'react'
import '../styles/components/Lobby.css'
import {imagehoverBoolean, bannerImageHoverOn, bannerImageHoverOff, bannnerImageHoverSelector} from '../features/hoverSlice' 
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"

function Lobby() {

    const dispatch = useDispatch();
    //selector for image hovering in banner
    const bannerImageHoveredSeelector = useSelector(bannnerImageHoverSelector);

    return (
        <div className="lobby">
            <div className="banner">
                <div className="banner__left">
                    <div className="titleText">
                        <h1>Esports Has a New Arena</h1>
                    </div>
                    <div className="SubTextList">
                        <ul>
                            <li>Play Tournaments</li>
                            <li>Win Rewards</li>
                            <li>Create Teams</li>
                            <li>Challenge Friends</li>
                        </ul>
                    </div>
                    <div className="buttonCTA">
                        <button>GET STARTED</button>
                    </div>
                </div>
                <div class="figure">
                    <div  className="imageContainer"
                        onMouseEnter={()=> dispatch(bannerImageHoverOn())} 
                        onMouseLeave={()=> dispatch(bannerImageHoverOff())}>
                            {bannerImageHoveredSeelector ?
                                <img src="https://i.ibb.co/2kpjdDD/image2.png" alt="banner1" border="0" />
                            : 
                                <img class="image-main" src="https://i.ibb.co/NyKfWhm/image1.png" data-src="https://i.ibb.co/ym2SQ17/banner-Image2-2.png"/>
                             }
                    </div>
                </div>{/*Figure div end*/}
                
            </div>{/*Banner div end*/}

            <div className="features">
                    <div className="features__top">
                        <h1>What's</h1>
                        <img src="https://i.ibb.co/h7jg8YF/navLogo.png" alt="navLogo" border="0"/>
                        <h1>?</h1>

                    </div>
                    <div className="feautures__bottom">
                        <div className="features__card">
                            <div className="card">
                                <div className="card__image">
                                    <img src="https://i.ibb.co/DLrzq1w/trophy.png" alt="trophy" border="0"/>
                                </div>
                                <h2>Play Tournaments</h2>
                                <p>Easy access to esports, no matter your skill level</p>
                            </div>
                            <div className="card">
                                <div className="card__image">
                                    <img src="https://i.ibb.co/2d8htfZ/people.png" alt="trophy" border="0"/>
                                </div>                                <h2>Socialize</h2>
                                <p>Find teams & join communities</p>
                            </div>
                            <div className="card">
                                <div className="card__image">
                                    <img src="https://i.ibb.co/FWK9Xj2/Vector.png" alt="trophy" border="0"/>
                                </div>                                <h2>Monetize</h2>
                                <p>Play and win rewards & cash prizes</p>
                            </div>
                              

                        </div>
                    </div>
            </div>

                    <div className="browse">
                        <div className="title">
                            <h1>Browse Tournaments</h1>
                        </div>
                        <div className="gameContainer">
                            <ul>
                                <li><img src="https://i.ibb.co/M5bRL20/FreeFire.png" alt="FreeFire" border="0" /></li>
                                <li><img src="https://i.ibb.co/yPFrtT0/cod.png" alt="cod" border="0" /></li>
                                <li><img src="https://i.ibb.co/yk3xknZ/Fifa.png" alt="Fifa" border="0" /></li>
                                <li><img src="https://i.ibb.co/4fgY1QV/FauG.png" alt="FauG" border="0" /></li>
                                <li id="moreTournaments"><img src="https://i.ibb.co/vvLfnHR/see-Button.png" alt="see-Button" border="0" /></li>
                            </ul>
                        </div>
                    </div>
        </div>
    )
}

export default Lobby
