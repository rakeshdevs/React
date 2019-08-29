export function formatAddress(address) {
    if(address.no_postal_address && address.potential_address) {
        return address.properties.formatted_address.split(", ").join('\r\n') + `\r\n(${address.potential_address})`
    }
    return address.properties.formatted_address.split(", ").join('\r\n')
}