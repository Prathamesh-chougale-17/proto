use anchor_lang::prelude::*;

declare_id!("Hk2WUmpA3T4gzwQfi7DeWSFo3kTvrLjUWZTsQxnfokgw");

#[program]
pub mod contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
