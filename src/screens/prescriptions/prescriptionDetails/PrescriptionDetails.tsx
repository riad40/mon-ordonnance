import { View, Text, Pressable, ScrollView } from "react-native"
import { NavBar, PrescriptionHeader, WideButton } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../@types/navigation"
import prescriptionDetailsStyles from "./prescriptionDetailsStyles"

const PrescriptionDetails = ({
    navigation,
}: {
    navigation: PrescreptionsStackNavProps<"PrescriptionDetails">["navigation"]
}): JSX.Element => {
    return (
        <ScrollView>
            <NavBar navigation={navigation} />
            <View style={prescriptionDetailsStyles.container}>
                <PrescriptionHeader date="12/12/2020" />
                <View style={prescriptionDetailsStyles.patientNameWrapper}>
                    <Text style={prescriptionDetailsStyles.patientNameBold}>Nom du patient :</Text>
                    <Text style={prescriptionDetailsStyles.patientName}>John Doe</Text>
                </View>

                <View style={prescriptionDetailsStyles.productsWrapper}>
                    <Text style={prescriptionDetailsStyles.productTitle}>some doliprane thing or whatever</Text>
                    <View style={prescriptionDetailsStyles.productsDosagesWrapper}>
                        <Text style={prescriptionDetailsStyles.productsDosagesDateRange}>
                            Prendre pendant 3 semaine
                        </Text>
                        <Text style={prescriptionDetailsStyles.productsDosagesDosage}>
                            1 comprimé après chaque repas
                        </Text>
                    </View>
                </View>
            </View>
            <WideButton text="Imprimer" />
        </ScrollView>
    )
}

export default PrescriptionDetails