import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ShopMessageRegister } from './shop/ShopMessageRegister';
import PropTypes from 'prop-types';

// 빵 상품
import { BreadList } from "./bread/BreadList";
import { BreadOption } from "./bread/BreadOption";
import { BreadItem } from "./bread/BreadItem";

// 주문
import { OrderRegister } from "./order/OrderRegister";
import { Features } from "./common/HomeMain";
import { ShopAbout, AboutDetail } from './shop/ShopAbout';
import { Main } from './Main';

//유저
import { UserRegister } from "./user/UserRegister";
import { UserAccess } from "./user/UserAccess";
import { UserDetail } from "./user/UserDetail";
import {UserFindID} from "./user/UserFindID";
import {UserFindPW} from "./user/UserFindPW";
import UserShipping from "./user/UserShipping";
import {SearchBreadItem} from "./bread/SearchBreadItem";

//매장위치 표시 지도사용
import { ShopDetail } from "./shop/ShopDetail";
import { ShopLocation } from "./shop/ShopLocation";

// 리듀서
import { createStore } from 'redux'
import rootReducer from './RootReducer'
import theme from "./vendor/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

// 관리자
import { AdminOrderDelivery } from "./admin/AdminOrderDelivery";
import { AdminUserList } from "./admin/AdminUserList";
import { AdminBreadRegister } from "./admin/AdminBreadRegister";
import { Admin } from "./admin/AdminRouter";
import { AdminMain } from "./admin/AdminMain";

// 관리자 차트와 지도
import {Chart} from "./chart/Chart";
import { Map } from './vendor/map/Map'

//챗봇
import Chatbot from "./vendor/chatbot/Chatbot";
import {BotBreadCategoly} from "./vendor/chatbot/BotBreadCategoly";
// 리뷰
import {ReviewWrite} from "./review/ReviewWrite";
import {Review} from "./review/Review";
import {ReviewSearch} from "./review/ReviewSearch";
import {ReviewInfo} from "./review/ReviewInfo";
import {ChatBotLogin} from "./vendor/chatbot/ChatBotLogin";
import {ChatBotSearch} from "./vendor/chatbot/ChatBotSearch";


export const RootRouter = () => {
	return <>
		<Provider store = {createStore(rootReducer)}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component = {Main}/>
					<Route path="/features" component = {Features} />
					<Route path="/about" component ={ShopAbout} />
					<Route path="/shop-message-register" component = {ShopMessageRegister}/>
					<Route path="/breadList" component = {BreadList} />
					<Route path="/option" component={BreadOption}/>
					<Route path="/review" component={Review}/>
					<Route path="/reviewWrite" component={ReviewWrite}/>
					<Route path="/reviewSearch" component={ReviewSearch}/>
					<Route path="/reviewInfo" component={ReviewInfo}/>
					<Route path="/signin" component={UserAccess}/>
					<Route path="/signup" component={UserRegister}/>
					<Route path="/findId" component={UserFindID}/>
					<Route path="/findPw" component={UserFindPW}/>
					<Route path="/aboutDetail" component={AboutDetail}/>
					<Route path="/breadItem" component={BreadItem}/>
					<Route path="/searchBreadItem" component={SearchBreadItem}/>
					<Route path="/order" component={OrderRegister}/>
					<Route path="/myPage" component={ UserDetail }/>
					<Route path="/contactDetail" component={ ShopDetail }/>
					<Route path="/contacts" component={ ShopLocation }/>
					<Route path="/shipping" component={ UserShipping }/>
					<Route path="/bot" component={ Chatbot }/>
					<Route path="/botBreadCategoly" component={ BotBreadCategoly }/>
					<Route path="/chatBotLogin" component={ ChatBotLogin }/>
					<Route path="/chatBotSearch" component={ ChatBotSearch }/>
					<Redirect from="/message" to="/" /> {/* 주소/message 로 접속 시 주소/posts 로 리디렉션 */}
					<ThemeProvider theme={theme}>
						<Route path="/dashboard" component={Admin}/>
						<Switch>
							<RouteWithLayout
								component={Map}
								exact
								layout={AdminMain}
								path="/map"
							/>
							<RouteWithLayout
								component={AdminUserList}
								exact
								layout={AdminMain}
								path="/user-list"
							/>
							<RouteWithLayout
								component={ AdminOrderDelivery }
								exact
								layout={ AdminMain }
								path="/adminOrderDelivery"
							/>
							<RouteWithLayout
								component={ Chart }
								exact
								layout={ AdminMain }
								path="/chart"
							/>
							<RouteWithLayout
								component={ AdminBreadRegister }
								exact
								layout={ AdminMain }
								path="/adminBreadRegister"
							/>
						</Switch>
					</ThemeProvider>
				</Switch>
			</BrowserRouter>
		</Provider>
	</>


}



export const RouteWithLayout = props => {
	const { layout: Layout, component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			render={matchProps => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	);
};

RouteWithLayout.propTypes = {
	component: PropTypes.any.isRequired,
	layout: PropTypes.any.isRequired,
	path: PropTypes.string
};
