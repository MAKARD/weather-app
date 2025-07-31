// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Context = any;

interface Provider {
  emit(name: unknown, payload: unknown): void;
  addListener(name: unknown, listener: (context: Context) => unknown): void;
  removeListener(name: unknown, listener: (context: Context) => unknown): void;
}

type ListenerFunction = () => Promise<void> | void;
type ListenerFunctionWithContext<E, T extends keyof E> = (
  context: E[T]
) => Promise<void> | void;

type Listener<E, T extends keyof E> = E[T] extends undefined
  ? ListenerFunction
  : ListenerFunctionWithContext<E, T>;

export class EventsService<E> {
  constructor(
    private readonly provider: Provider
  ) { }

  emit<T extends keyof E>(
    ...args: E[T] extends undefined
      ? [name: T]
      : [name: T, context: E[T]]
  ) {
    const [name, context] = args;

    this.provider.emit(name, context);
  }

  addListener<T extends keyof E>(
    name: T,
    listener: Listener<E, T>
  ) {
    this.provider.addListener(name, listener);

    return () => {
      this.provider.removeListener(name, listener);
    };
  }
}
