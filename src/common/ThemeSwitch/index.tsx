import { useAppDispatch, useAppSelector } from "../../features/homepage/hooks"
import { toggleTheme } from "../themeSlice";
import { Box, Button, Icon, IconWrapper, Text, Wrapper } from "./styled";


export const ThemeSwitch = () => {
    const dispatch = useAppDispatch();
    const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>DARK MODE {isDarkTheme ? "ON" : "OFF"}</Text>
                <Box>
                    <IconWrapper moveToRight={isDarkTheme}>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    )
}