import { useState, useMemo } from "react"
import { TouchableOpacity, View, ScrollView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Option, SearchInput, NoResults } from "../../../"
import selectOptionStyles from "./selectOptionStyles"
import Modal from "react-native-modal"
import Ionicos from "react-native-vector-icons/Ionicons"
import { Option as OptionType } from "../../../../@types"

const SelectOption = ({ initialValue, data, onSelect }: { initialValue: OptionType; data: { name: string; avatar: any }[]; onSelect: (item: OptionType) => void }): JSX.Element => {
    const [show, setShow] = useState<boolean>(false)

    const [value, setValue] = useState<OptionType>(initialValue)

    const onSelectOption = (value: OptionType) => {
        setValue(value)
        setShow(false)
        onSelect(value)
    }

    const [search, setSearch] = useState<string>("")

    const onSearch = (text: string) => {
        setSearch(text)
    }

    const filteredData = useMemo(() => {
        return data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }, [data, search])

    return (
        <View>
            <TouchableOpacity style={selectOptionStyles.button} onPress={() => setShow(!show)}>
                <Option data={value} style={{ borderBottomWidth: 0 }} />
                <Ionicons name="chevron-down-outline" size={20} color="#DBDBDB" />
            </TouchableOpacity>
            {show && (
                <Modal isVisible={show} onBackdropPress={() => setShow(false)} onBackButtonPress={() => setShow(false)} style={selectOptionStyles.modal}>
                    <View style={selectOptionStyles.modalContainer}>
                        <TouchableOpacity onPress={() => setShow(false)} style={selectOptionStyles.closeModal}>
                            <Ionicos name="chevron-down-circle-outline" size={30} color="#000" />
                        </TouchableOpacity>

                        <SearchInput placeholder="Rechercher" onChangeText={onSearch} />
                        <ScrollView>
                            {filteredData?.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => onSelectOption(item)}>
                                    <Option data={item} />
                                </TouchableOpacity>
                            ))}

                            {filteredData.length === 0 && <NoResults text={search} />}
                        </ScrollView>
                    </View>
                </Modal>
            )}
        </View>
    )
}

export default SelectOption
