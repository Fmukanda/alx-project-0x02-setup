/**
 * Defines the props structure for the Card component.
 * The main paragraph content of the card.
 * The bold title displayed at the top of the card. */
 */
export interface CardProps {
  title: string;
  content: string;
}

/**
 * Defines the structure for a new post created by the modal.
 * This is identical to CardProps, but explicitly defines the object being created.
 */
export interface PostData {
  title: string;
  content: string;
}

/**
 * Defines the props for the PostModal component.
 */
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
