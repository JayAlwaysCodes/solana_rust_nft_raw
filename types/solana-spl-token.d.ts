// types/solana-spl-token.d.ts
declare module '@solana/spl-token' {
    export const TOKEN_PROGRAM_ID: import('@solana/web3.js').PublicKey;
    export const ASSOCIATED_TOKEN_PROGRAM_ID: import('@solana/web3.js').PublicKey;

    export function getAssociatedTokenAddress(
        mint: import('@solana/web3.js').PublicKey,
        owner: import('@solana/web3.js').PublicKey,
        allowOwnerOffCurve?: boolean,
        programId?: import('@solana/web3.js').PublicKey,
        associatedTokenProgramId?: import('@solana/web3.js').PublicKey
    ): Promise<import('@solana/web3.js').PublicKey>;
}
