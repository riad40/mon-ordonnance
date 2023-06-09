import { ScrollView, View, SafeAreaView } from "react-native"
import { NavBar, PatientCard, Header, TextButton, PatientCardSkeleton, NoResults } from "../../../components"
import { PatientStackNavProps } from "../../../navigation/stacks/patientStack/@types"
import patientsListStyles from "./patientsListStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useEffect, useState, useMemo } from "react"
import { useAppSelector, useAppDispatch } from "../../../state/hooks"
import { RootState } from "../../../state/store"
import { getPatients } from "../../../services/patientServices"

const PatientsList = ({ navigation }: { navigation: PatientStackNavProps<"PatientsList">["navigation"] }) => {
    const { patients, loading } = useAppSelector((state: RootState) => state.patients)
    const { patientsCount } = useAppSelector((state: RootState) => state.dashboard)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPatients())
    }, [])

    const [search, setSearch] = useState("")
    const onSearch = (text: string) => {
        setSearch(text)
    }

    const filteredPatients = useMemo(() => {
        return patients.filter(patient => patient.firstName?.toLowerCase().includes(search.toLowerCase()) || patient.lastName?.toLowerCase().includes(search.toLowerCase()))
    }, [patients, search])

    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <Header heading="Patients" subHeading={`${patientsCount.total} Patients`} textButton="+ Ajouter un patient" placeholder="Rechercher un patient" onChangeText={onSearch} />
                <View style={patientsListStyles.container}>
                    {loading ? (
                        <>
                            <PatientCardSkeleton />
                            <PatientCardSkeleton />
                            <PatientCardSkeleton />
                            <PatientCardSkeleton />
                        </>
                    ) : (
                        filteredPatients?.map(patient => <PatientCard key={patient._id} patient={patient} onPress={() => navigation.navigate("PatientDetails", { patientId: patient._id })} />)
                    )}
                </View>
                {filteredPatients.length === 0 && <NoResults text={search} />}
                <View>
                    <TextButton text="+ Ajouter un patient" style={patientsListStyles.btnCenter} />
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PatientsList
