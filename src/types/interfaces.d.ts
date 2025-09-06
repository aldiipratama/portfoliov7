import { ReactNode } from "react";

/**
 * Base component props interface
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
  testId?: string;
}

/**
 * Loading state interface
 */
export interface LoadingState {
  isLoading: boolean;
  loadingText?: string;
  error?: string | null;
}

/**
 * Form component base props
 */
export interface BaseFormProps extends BaseComponentProps {
  onSubmit: (values: Record<string, unknown>) => void | Promise<void>;
  disabled?: boolean;
  isLoading?: boolean;
  validationSchema?: Record<string, unknown>;
}

/**
 * Modal/Dialog component props
 */
export interface BaseModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

/**
 * Button component props
 */
export interface BaseButtonProps extends BaseComponentProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

/**
 * Card component props
 */
export interface BaseCardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  footer?: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  clickable?: boolean;
  onClick?: () => void;
}

/**
 * Animation props
 */
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  delay?: number;
  duration?: number;
  disabled?: boolean;
}

/**
 * Data fetching state
 */
export interface DataState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
  refetch: () => void;
}

/**
 * Pagination interface
 */
export interface PaginationState {
  page: number;
  limit: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}

/**
 * Sort interface
 */
export interface SortState {
  field: string;
  direction: "asc" | "desc";
}

/**
 * Filter interface
 */
export interface FilterState {
  [key: string]: unknown;
}

/**
 * List component props
 */
export interface BaseListProps<T> extends BaseComponentProps {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string;
  loading?: boolean;
  error?: string | null;
  empty?: ReactNode;
  pagination?: PaginationState;
  onPageChange?: (page: number) => void;
}

/**
 * Form field props
 */
export interface BaseFieldProps extends BaseComponentProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  value?: unknown;
  onChange?: (value: unknown) => void;
  onBlur?: () => void;
}

/**
 * Menu item interface
 */
export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: MenuItem[];
}

/**
 * Navigation props
 */
export interface NavigationProps extends BaseComponentProps {
  items: MenuItem[];
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "pills" | "underline";
  activeId?: string;
  onItemClick?: (item: MenuItem) => void;
}

/**
 * Toast notification interface
 */
export interface ToastNotification {
  id: string;
  title?: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * User preference interface
 */
export interface UserPreferences {
  theme: "light" | "dark" | "system";
  language: string;
  animationsEnabled: boolean;
  soundEnabled: boolean;
  notificationsEnabled: boolean;
}
