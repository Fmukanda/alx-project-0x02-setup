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

// Define possible sizes and shapes using TypeScript literal types
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

/**
 * Defines the props structure for the reusable Button component.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  shape?: ButtonShape;
  children: React.ReactNode; // Content inside the button
}
