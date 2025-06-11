import { Request, Response } from "express";
import { AddAddress } from "../../usecases/Address/AddAddress";
import { DeleteAddress } from "../../usecases/Address/DeleteAddress";
import { UpdateAddress } from "../../usecases/Address/UpdateAddress";


export class AddressController{
    constructor(
        private readonly addAddressUseCase: AddAddress,
        private readonly updateAddressUseCase: UpdateAddress,
        private readonly deleteAddressUseCase: DeleteAddress
    ){ }

    async addAddress(req: Request, res: Response): Promise<any> {
        try {
            const data = req.body
            const address = await this.addAddressUseCase.execute(data);
            if(!address){
                return res.status(404).json({ message: "Address not found" })
            } else{
                return res.status(200).json({ message: "Address added successfully" })
            }
        } catch (error) {
            console.error("Address controller Error:", error);
            return res.status(500).json({ message: "Internal server error in controller" });
        }
    }

    async updateAddress(req: Request, res: Response): Promise<any> {
        try {
            const addressId = req.params.id
            const data = req.body
            const address = await this.updateAddressUseCase.execute(data,addressId);
            if(!address){
                return res.status(404).json({ message: "Address not found" })
            }else{
                return res.status(200).json({ message: "Address updated successfully" })
            }
            res.status(200).json(address);
        } catch (error) {
              console.error("Address controller Error:", error);
            return res.status(500).json({ message: "Internal server error in controller" });
        }
    }

    async deleteAddress(req: Request, res: Response): Promise<any> {
        try {
            const addressId = req.params.id
            const address = await this.deleteAddressUseCase.execute(addressId);
            if(!address){
                return res.status(404).json({ message: "Address not found" })
            }else{
                return res.status(200).json({ message: "Address deleted successfully" })
            }
            res.status(200).json(address);
        } catch (error) {
             console.error("Address controller Error:", error);
            return res.status(500).json({ message: "Internal server error in controller" });
        }
    }
}
