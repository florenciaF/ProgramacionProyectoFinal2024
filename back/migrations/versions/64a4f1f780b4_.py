"""empty message

Revision ID: 64a4f1f780b4
Revises: 
Create Date: 2024-10-21 21:24:12.353241

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '64a4f1f780b4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('attendance', schema=None) as batch_op:
        batch_op.add_column(sa.Column('status', sa.String(length=50), nullable=True))

    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.drop_column('status')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.add_column(sa.Column('status', sa.VARCHAR(length=50), autoincrement=False, nullable=True))

    with op.batch_alter_table('attendance', schema=None) as batch_op:
        batch_op.drop_column('status')

    # ### end Alembic commands ###