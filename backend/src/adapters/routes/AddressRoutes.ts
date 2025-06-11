import { Router } from "express";
import { AddressRepositoryImpl } from "../repositories/AddressRepositoryImpl";
import { AddAddress } from "../../usecases/Address/AddAddress";
import { AddressController } from "../controllers/AddressController";
import addressModel from "../../frameworks/models/address/address.model";
import { UpdateAddress } from "../../usecases/Address/UpdateAddress";
import { DeleteAddress } from "../../usecases/Address/DeleteAddress";

const addressRepository = new AddressRepositoryImpl(addressModel);
const addAddress = new AddAddress(addressRepository);
const updateAddress = new UpdateAddress(addressRepository);
const deleteAddress = new DeleteAddress(addressRepository);
const addressController = new AddressController(addAddress, updateAddress, deleteAddress);

const router = Router();

router.post('/add-address', async (req, res) => {
    try {
        addressController.addAddress(req, res)
    } catch (error) {
        console.log(error);
        
    }
})

router.put('/update-address/:id', async (req, res) => {
    try {
        addressController.updateAddress(req, res)
    } catch (error) {
        console.log(error);
        
    }
})

router.delete('/delete-address/:id', async (req, res) => {
    try {
        addressController.deleteAddress(req, res)
    } catch (error) {
        console.log(error);
    }
})  