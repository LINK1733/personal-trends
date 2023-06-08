"use client";
import {
	Box,
	Typography,
	Container,
	Button,
	AppBar,
	Toolbar,
	IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Personal Trends
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<Container>{children}</Container>
		</>
	);
}
