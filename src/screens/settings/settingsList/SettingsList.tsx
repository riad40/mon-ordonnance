import { View, Text, Button } from "react-native"
import { NavBar, SimpleCard, Heading } from "../../../components"
import { SettingsStackNavProps } from "../../../@types/navigation"
import settingsListStyles from "./settingsListStyles"

const SettingsList = ({
    navigation,
}: {
    navigation: SettingsStackNavProps<"SettingsList">["navigation"]
}): JSX.Element => {
    return (
        <View>
            <NavBar />
            <View style={settingsListStyles.container}>
                <Heading text="Abderazzaq Hakimi" />
            </View>
            <SimpleCard text="Profile" onPress={() => navigation.navigate("Profile")} />
            <SimpleCard text="Changer mon compte" />
        </View>
    )
}

export default SettingsList
