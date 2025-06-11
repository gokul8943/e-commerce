
export interface AddressRepository {
    addAddress(data: any): Promise<any>;
    updateAddress(data: any, addressId: string): Promise<any>;
    deleteAddress( addressId: string): Promise<any>;
}