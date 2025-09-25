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

/**
 * Defines the props structure for the PostCard component, 
 * matching the data structure from JSONPlaceholder.
 */
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string; // Using 'body' to match the API response
}

/**
 * Defines the address structure from the JSONPlaceholder API.
 */
export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

/**
 * Defines the props structure for the UserCard component, 
 * matching the data from the JSONPlaceholder API.
 */
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
}
