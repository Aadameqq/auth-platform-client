import {Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

export function ActivationSuccessModal() {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Authentication" centered>

            </Modal>
        </>
    );
}