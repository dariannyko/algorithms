// TODO: refactor
type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    
    subscribe(eventName: string, callback: Callback): Subscription {
        
        return {
            unsubscribe: () => {
                
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        
    }
}