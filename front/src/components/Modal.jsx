import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { setCategory, toggleModal } from '@/slices/appSlice';

export default function Modal() {
	const inputRef = useRef(null);
	const { showModal, category } = useSelector((state) => state.app);

	const dispatch = useDispatch();
	const onSubmit = () => {
		dispatch(setCategory(inputRef.current.value));
		dispatch(toggleModal());
	};

	return (
		<Dialog open={showModal}>
			<DialogTrigger asChild>
				<Button onClick={() => dispatch(toggleModal())}>Search Category</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogTitle>Enter Category</DialogTitle>
				<Input
					defaultValue={category}
					ref={inputRef}
					type='text'
				/>
				<Button
					variant='outline'
					onClick={onSubmit}
				>
					Save Category
				</Button>
			</DialogContent>
		</Dialog>
	);
}
