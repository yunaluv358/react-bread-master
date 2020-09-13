import React, {forwardRef} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {Button, colors, Divider, Drawer, List, ListItem, Typography} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { AdminProfile } from "./AdminProfile";
import {NavLink as RouterLink} from "react-router-dom";



const adminSidebarStyle = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

export const AdminSidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = adminSidebarStyle();

  const pages = [
    {
      title: '홈',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: '주문차트',
      href: '/chart',
      icon: <DashboardIcon />
    },
    {
      title: '배송지 조회',
      href: '/Map',
      icon: <DashboardIcon />
    },
    {
      title: '회원관리',
      href: '/user-list',
      icon: <DashboardIcon />
    },
    {
      title: '배송관리',
      href: '/adminOrderDelivery',
      icon: <DashboardIcon />
    },
    {
      title: '상품등록 수정',
      href: '/adminBreadRegister',
      icon: <DashboardIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <AdminProfile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <UpgradePlan />
      </div>
    </Drawer>
  );
};

AdminSidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

const sidebarNavStyle = makeStyles(theme => ({
	root: {},
	item: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0
	},
	button: {
		color: colors.blueGrey[800],
		padding: '10px 8px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
		fontWeight: theme.typography.fontWeightMedium
	},
	icon: {
		color: theme.palette.icon,
		width: 24,
		height: 24,
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing(1)
	},
	active: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium,
		'& $icon': {
			color: theme.palette.primary.main
		}
	}
}));

const SidebarNavRouterLink = forwardRef((props, ref) => (
	<div
		ref={ref}
		style={{ flexGrow: 1 }}
	>
		<RouterLink {...props} />
	</div>
));

export const SidebarNav = props => {
	const { pages, className, ...rest } = props;

	const classes = sidebarNavStyle();

	return (
		<List
			{...rest}
			className={clsx(classes.root, className)}
		>
			{pages.map(page => (
				<ListItem
					className={classes.item}
					disableGutters
					key={page.title}
				>
					<Button
						activeClassName={classes.active}
						className={classes.button}
						component={SidebarNavRouterLink}
						to={page.href}
					>
						<div className={classes.icon}>{page.icon}</div>
						{page.title}
					</Button>
				</ListItem>
			))}
		</List>
	);
};

SidebarNav.propTypes = {
	className: PropTypes.string,
	pages: PropTypes.array.isRequired
};

const upgradePlanStyle = makeStyles(theme => ({
	root: {
		backgroundColor: colors.grey[50]
	},
	media: {
		paddingTop: theme.spacing(2),
		height: 80,
		textAlign: 'center',
		'& > img': {
			height: '100%',
			width: 'auto'
		}
	},
	content: {
		padding: theme.spacing(1, 2)
	},
	actions: {
		padding: theme.spacing(1, 2),
		display: 'flex',
		justifyContent: 'center'
	}
}));

export const UpgradePlan = props => {
	const { className, ...rest } = props;

	const classes = upgradePlanStyle();

	return (
		<div
			{...rest}
			className={clsx(classes.root, className)}
		>
			<div className={classes.content}>
				<Typography
					align="center"
					gutterBottom
					variant="h6"
				>

				</Typography>
				<Typography
					align="center"
					variant="body2"
				>


				</Typography>
			</div>
			{/*<div className={classes.actions}>*/}
			{/*  <Link */}
			{/*    color="primary"*/}
			{/*    component="a"*/}
			{/*    variant="contained"*/}
			{/*    to="/"*/}
			{/*  >*/}
			{/*    홈으로 이동*/}
			{/*  </Link>*/}
			{/*</div>*/}
		</div>
	);
};

UpgradePlan.propTypes = {
	className: PropTypes.string
};
