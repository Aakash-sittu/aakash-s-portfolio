
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '../../hooks/useToast';
import CheckIcon from '../icons/CheckIcon';

const Toast: React.FC<{ message: string; onDismiss: () => void }> = ({ message, onDismiss }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.5 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className="flex items-center gap-3 px-4 py-2 rounded-full shadow-lg bg-light-slate/80 backdrop-blur-sm border border-dark-slate text-white"
    >
      <CheckIcon className="h-5 w-5 text-green-400" />
      <span>{message}</span>
    </motion.div>
  );
};


const ToastContainer: React.FC = () => {
    const { toasts, removeToast } = useToast();

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
            <AnimatePresence initial={false}>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        onDismiss={() => removeToast(toast.id)}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};


export default ToastContainer;
