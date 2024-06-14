import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

const SaleOrderForm = ({ isOpen, onClose, onSubmit, defaultValues = {} }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Customer ID" {...register('customer_id', { required: true })} />
            <Controller
              control={control}
              name="invoice_date"
              render={({ field }) => <DatePicker {...field} selected={field.value} />}
            />
            <Controller
              control={control}
              name="items"
              render={({ field }) => <Select isMulti {...field} options={[]} />}
            />
            <Button type="submit">Save</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;