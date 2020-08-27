import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ShopMessageRegister } from './shop/ShopMessageRegister';
import PropTypes from 'prop-types';
import { Admin } from "./admin/AdminRouter";
import { AdminMain } from "./admin/AdminMain";
import { BreadList } from "./bread/BreadList";
import { BreadSearch } from "./bread/BreadSearch";
import { BreadItem } from "./bread/BreadItem";

import { OrderRegister } from "./order/OrderRegister";
import { MovieList } from "./movie/MovieList";
import { Features } from "./common/HomeMain";
import { ShopAbout, AboutDetail } from './shop/ShopAbout';
import { Main } from './Main';

import { UserRegister } from "./user/UserRegister";
import { UserAccess } from "./user/UserAccess";
import { UserDetail } from "./user/UserDetail";

import theme from "./vendor/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Map } from './vendor/map'

import { OrderDelivery } from "./order/OrderDelivery";
import { ShopDetail } from "./shop/ShopDetail";
import { ShopLocation } from "./shop/ShopLocation";
import { MovieGenre } from "./movie/MovieGenre";
import {Chart} from "./chart/Chart";

import { createStore } from 'redux'
import rootReducer from './RootReducer'
import { AdminUserList } from "./admin/AdminUserList";
import { AdminBreadRegister } from "./admin/AdminBreadRegister";




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
					<Route path="/search" component={BreadSearch}/>
					<Route path="/signin" component={UserAccess}/>
					<Route path="/signup" component={UserRegister}/>
					<Route path="/aboutDetail" component={AboutDetail}/>
					<Route path="/bread01" component={BreadItem}/>
					<Route path="/order" component={OrderRegister}/>
					<Route path="/myPage" component={ UserDetail }/>
					<Route path="/contactDetail" component={ ShopDetail }/>
					<Route path="/contacts" component={ ShopLocation }/>
					<Route path="/movie-genre" component={MovieGenre}/>
					<Route path="/movie-list" component={ MovieList }/>
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
								component={ OrderDelivery }
								exact
								layout={ AdminMain }
								path="/order-delivery"
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
								path="/productRegistration"
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
